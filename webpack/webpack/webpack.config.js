const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',// 模式
  output: {// 出口
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {// 规则
    rules: [
      // {
      //   test: /\.css$/, //匹配文件
      //   use: ['style-loader', 'css-loader'] // 指明使用什么加载器
      // },
      // {
      //   test: /\.scss$/, //匹配文件
      //   use: ['style-loader', 'css-loader', 'sass-loader'] // 指明使用什么加载器
      // },
      {
        test: /\.(sc|c|sa)ss$/, //匹配文件
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true}// 方便调试
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer')(),
                //这里还能引入更多别的插件
              ]
          
            }
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}//
          }
        ] 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: [path.resolve(__dirname, 'src/')],// scr的所有图片
        use: ['file-loader', {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: { progressive: true, quality: 65}, // 压缩成品质为65的
            optipng: { enabled: false},
            pngquant: {quality: '65-90', speed: 4},
            gifsice: { interlaced: false}, // 是否开启隔行扫描
            webp: {quality: 75}
          }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css', // 最终输出文件名
      chunkFilename: '[id].[hash].css'
    }),
    new OptimizeCssAssetsPlugin({}),
    new UglifyJsPlugin({
      cache: true,// js没有变化就不压缩
      parallel: true, // 是否启用并行压缩
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      title: 'wn stuby', //生成的文件标题
      filename: 'main.html',
      minify: {// 压缩选项
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
        removeAttributeQuotes: true, // 移除双引号
      }
    }),
    new CleanWebpackPlugin()
  ]
}