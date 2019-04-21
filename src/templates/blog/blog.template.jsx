import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../components/typography";

import { Section } from "../../components-app/layouts";
import { BlogCardList } from "../../components-static";
import { FormSignup } from "../../components-app/forms";
import FormConatiner from "../../components/forms/FormContainer";

export const BlogPageTemplate = ({
  title,
  body,
  prompt,
  form: { firstNamePlaceholder, emailAddressPlaceholder, submitLabel }
}) => (
  <>
    <Section title={title}>
      <Text size="lg">{body}</Text>
      <FormConatiner>
        <FormSignup
          shouldDisplayFirstName
          actionLabel={submitLabel}
          layout="stacked"
          placeholder={{
            firstName: firstNamePlaceholder,
            email: emailAddressPlaceholder
          }}
        />
      </FormConatiner>
      <Text size="lg">{prompt}</Text>
    </Section>
    <BlogCardList />
  </>
);

BlogPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired
};

export default BlogPageTemplate;
