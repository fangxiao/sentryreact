const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");


module.exports = {
    entry: "./src/js/index.js",
    output:{
        filename:"index.js",
        path:path.resolve(__dirname, 'dist/')
    },
    module:{
        rules:[
            {
                test: /\.less|.css?$/,
                use:["style-loader","css-loader","less-loader"]
                
            } ,
            {
                test: /\.jsx?$/, // jsx/js文件的正则
                    exclude: /node_modules/, // 排除 node_modules 文件夹
                use: {
                    // loader 是 babel
                    loader: 'babel-loader',
                    options: {
                        // babel 转义的配置选项
                        babelrc: false,
                        presets: [
                            // 添加 preset-react
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), {modules: false}]
                        ],
                        cacheDirectory: true
                    }
                }
            }
            
        ]
    },
    devtool: 'source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode:"development",
    devServer:{
        contentBase:'./dist',  //设置服务器访问的基本目录
        host:'localhost', //服务器的ip地址
        port:3000,  //端口
        open:true  //自动打开页面
    }
}
