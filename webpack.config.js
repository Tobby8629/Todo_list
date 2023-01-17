const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {webpack} = require('webpack');
module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname,'./src/index.js')
    },
    output:{
       path: path.resolve(__dirname,'dist'),
       filename: '[name][contenthash].js', 
       clean: true,
    },
    devServer:{
        static: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'todo_list',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],

}