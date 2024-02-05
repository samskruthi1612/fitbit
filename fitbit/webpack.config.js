const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename:"css/bundle.css"
      }
    ),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "./assets" },
        { from: "./src/index.html", to: "" },
      ],
    }),
  ],
  module: {
    rules: [
       {
        test: /\.scss$/, // 1.compile sass, 2.css loader, 3.create separate css file,
        use: [MiniCssExtractPlugin.loader,{loader: "css-loader",options: {url:false}}, "sass-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 9000,
  },
};
