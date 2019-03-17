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
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};
