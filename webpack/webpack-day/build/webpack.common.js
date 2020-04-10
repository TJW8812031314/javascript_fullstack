const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
const merge = require('webpack-merge')

const commonConfig = {
  entry: {
    // lodash: './lodash.js',
    index: "./index.js"
  }, // 指定打包的入口文件
  output: {// 指定打包后的资源位置
    // 公共路径设置
    // publicPath: "https://cdn.biadu.com",
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  module: {
    // 遇到不认识的模块，就在这里找loader
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",// test.jpg
            outputPath: 'images/', // 输出路径
            limit: 240000,// 图片大小临界值，当小于直接以base64格式
          },
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', "css-loader", "postcss-loader"]

        // use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,// loader是有顺序的, 从后往前
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  plugins: [// 插件
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "标题自己取de",
      filename: "index.html"
    }),
    // 打包 前把上一次生成的目录删掉
    new CleanWebpackPlugin(),
  ],
}

module.exports = env => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}