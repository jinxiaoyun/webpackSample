const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const paths = require("./path.js")
module.exports = {
  entry: {
    app: __dirname + "/app/main.js",
    vendor: [
      "react",
      "react-dom",
      "react-router",
      "mobx",
      "mobx-react",
      "classnames"
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name]-[chunkhash:8].js"
    //chunkFilename: "[name]-[hash].js"
  },
  devtool: false,
  // devServer: {
  //   contentBase: "./dist",
  //   historyApiFallback: true, //不跳转
  //   inline: true, //实时刷新
  //   hot: true
  // },
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
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
        })
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
    //new webpack.HotModuleReplacementPlugin(), //热加载插件
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    //new ExtractTextPlugin("style.css"),
    new ExtractTextPlugin("[name]-[hash].css"),
    new CleanWebpackPlugin("dist/*.*", {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
      minChunks: Infinity
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {
      "@components": paths.appComponents
    }
  }
}
