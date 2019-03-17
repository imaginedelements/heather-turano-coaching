const path = require("path");

module.exports = {
  node: {
    fs: "empty",
    module: "empty"
  },
  // gatsby
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  // regualr
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "../src/components"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]___[hash:base64:5]",
              importLoaders: 3
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
};
