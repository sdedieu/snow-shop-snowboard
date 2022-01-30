const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (options) => {
  return {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      publicPath: "auto",
      uniqueName: "snowboard",
    },
    optimization: {
      moduleIds: "named",
      chunkIds: "named",
    },
    module: {
      rules: [
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: "url-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: ["@babel/env"],
              },
            },
          ],
        },
        {
          test: /\.(sass|css|scss)$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: () => [require("autoprefixer")()],
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "mfe",
        library: { type: "var", name: "mfe" },
        filename: "remoteEntry.js",
        exposes: {
          "./module": ".//src/app.js",
        },
      }),
    ],
    devServer: {
      port: 4204,
    },
  };
};
