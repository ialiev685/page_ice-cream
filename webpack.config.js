const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  experiments: {
    asset: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    // assetModuleFilename: "assets/[name][ext]", для asset/resourse
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/

        type: "asset/inline",
      },

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new CopyPlugin({
      patterns: [{ from: "src/image", to: "image" }],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    // compress: true,
    open: true,
    port: 9000,
  },
};
