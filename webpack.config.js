module.exports = {
  entry: ["./src/index.js"],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/public/",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public"
  }
};
