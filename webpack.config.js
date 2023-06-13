const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./app/main.js",
    renderer: "./app/renderer.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./app/index.html"),
          to: path.resolve(__dirname, "public"),
        },
        {
          from: path.resolve(__dirname, "./app/styles.css"),
          to: path.resolve(__dirname, "public"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  target: "electron-renderer",
};
