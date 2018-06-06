const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const paths = require("./path.js")
module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              module: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
            // options: {
            //   module: true,
            //   localIdentName: "[name]__[local]--[hash:base64:5]"
            // }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              javascriptEnabled: true,
              modifyVars: { "@primary-color": "#448afc" }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("版权所有，翻版必究"),
    new HtmlWebpackPlugin({
      template: __dirname + "/temp/index.temp.html" //new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin() //热加载插件
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {
      "@components": paths.appComponents
    }
  }
}
