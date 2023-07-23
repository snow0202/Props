module.exports = {
    // ...その他の設定
  
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    }
  };
  