const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html'
        })
    ]
}