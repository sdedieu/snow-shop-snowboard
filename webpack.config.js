const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (options) => {
  return {
    entry: "./index.js",
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
            'style-loader',
          'css-loader',
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
        name: "snowboard",
        library: { type: "var", name: "snowboard" },
        filename: "remoteEntry.js",
        exposes: {
          "./SnowBoardModule": "./app.js",
        },

        shared: ["react", "react-dom"],
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./**/*.html",
          },
        ],
      }),
    ],
    devServer: {
      port: 4204,
    },
  };
};
