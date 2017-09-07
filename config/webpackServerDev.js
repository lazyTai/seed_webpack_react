'use strict';

const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const webpackConfig = require('./webpack.config');
const paths = require('./config');

const protocol = paths.HOST
const host = paths.HOST

var proxUrl = 'http://localhost:3003'
module.exports = function (proxy, allowedHost) {
    return {
        contentBase: paths.appPublic,
        hot: true,
        publicPath: webpackConfig.output.publicPath,
        watchOptions: {
            ignored: /node_modules/,
        },
        historyApiFallback: true,
        inline: true,
        proxy,
        stats: {colors: true},
    };
};
