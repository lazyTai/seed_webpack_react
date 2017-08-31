module.exports = {
    strictExportPresence: true,
    rules: [
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },
        {test: /\.css$/, loader: "style-loader!css-loader"},
        {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        },
        {test: /\.(woff|woff2|eot|ttf|otf)$/i, loader: 'url-loader?limit=8192&name=[name].[ext]'},
        {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=8192&name=[name].[ext]'},
    ]
}