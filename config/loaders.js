var path = require('path')
var baseConfig = require('./config')
module.exports = {
    strictExportPresence: true,
    rules: [
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            loader: "style-loader",
        },
        {
            test: /\.css$/,
            loader: "css-loader",
            options: {
                modules: true
            }
        },
        {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        },
        {test: /\.(woff|woff2|eot|ttf|otf)$/i, loader: 'url-loader?limit=8192&name=[name].[ext]'},
        {test: /\.(jpe?g|png|gif)$/i, loader: 'url-loader?limit=8192&name=[name].[ext]'},
        {
            test: /\.(svg)$/i,
            loader: 'svg-sprite-loader',
            include: baseConfig.paths.fontPath
        },

    ]
}