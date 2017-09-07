const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');


const loaders = require('./loaders')
const path = require('path')
const baseConfig = require('./config')

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        require.resolve('react-dev-utils/webpackHotDevClient'),
        baseConfig.paths.appIndexJs,//入口文件
    ],
    output: {
        path: baseConfig.paths.appBuild,
        pathinfo: true,
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: baseConfig.paths.publicPath,
        devtoolModuleFilenameTemplate: (info) => {
            return path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
        },
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
        alias: {
            'react-native': 'react-native-web',
        },
    },
    module: loaders,
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: baseConfig.paths.appHtml,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WatchMissingNodeModulesPlugin(baseConfig.paths.appNodeModules),
    ]

}