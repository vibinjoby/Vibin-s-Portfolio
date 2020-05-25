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
    path: __dirname + "/public/assets/",
    publicPath: "/assets/",
    filename: "bundle.js",
    chunkFilename: "[name].js"
  },
  devServer: {
    contentBase: __dirname + "/public/",
    inline: true,
    host: "0.0.0.0",
    port: 8080
  }
};
