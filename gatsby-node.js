const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// gets all of the pages needed from the markdown
// creates the pages after it gathers the information
exports.createPages = ({ graphql, actions: { createPage } }) =>
  graphql(`
    query NodeQuery {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              key
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const cmsPages = result.data.allMarkdownRemark.edges;

    cmsPages.forEach((edge, i, arr) => {
      const id = edge.node.id;
      const prevPage = arr[i - 1];
      const nextPage = arr[i + 1];

      createPage({
        path:
          edge.node.frontmatter.key === "home" ? "/" : edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.key)}/${
            edge.node.frontmatter.key
          }.page.js`
        ),
        // The context is passed as props to the component as well
        // as into the component's GraphQL query.
        context: {
          id,
          pagePrev:
            prevPage && prevPage.node.frontmatter.key === "blog-post"
              ? prevPage.node.fields.slug
              : null,
          pageNext:
            nextPage && nextPage.node.frontmatter.key === "blog-post"
              ? nextPage.node.fields.slug
              : null
        }
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    cmsPages.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/pages/tags/index.js`),
        context: {
          tag
        }
      });
    });
  });

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
