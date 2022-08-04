const { addAfterLoader, loaderByName } = require("@craco/craco");
const path = require("node:path");

module.exports = {
  webpack: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
    configure(webpackConfig) {
      addAfterLoader(webpackConfig, loaderByName("babel-loader"), {
        test: /\.mdx?$/,
        use: [
          {
            loader: require.resolve("@mdx-js/loader"),
            options: {},
          },
        ],
      });
      return webpackConfig;
    },
  },
};
