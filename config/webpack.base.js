const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const babelOptions = {
  presets: [
    "@babel/preset-env",
    // "@babel/preset-typescript",
    "@babel/preset-react",
  ],
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions,
          },
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: babelOptions,
          },
        ],
      },
    ],
  },
  resolve: {
    // 模块后缀名解析顺序
    extensions: [".ts", ".tsx", ".js"],
  },
}
