var baseConfig = require('../config/config')

var port = baseConfig.port
var HOST = baseConfig.HOST

const {
    choosePort,
    createCompiler,
    prepareProxy,
    prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const createDevServerConfig = require('../config/webpackServerDev')
const webpackDevConfig = require('../config/webpack.config')
const appName = baseConfig.appName;
const urls = prepareUrls(baseConfig.protocol, HOST, port);
const compiler = createCompiler(webpack, webpackDevConfig, appName, urls, true/*useYarn*/);
const openBrowser = require('react-dev-utils/openBrowser');
const serverConfig = createDevServerConfig(
    baseConfig.proxySetting,
    urls.lanUrlForConfig
);
const devServer = new WebpackDevServer(compiler, serverConfig);
try {
    devServer.listen(port, HOST, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Starting the development server...\n');
        openBrowser(urls.localUrlForBrowser);
    })
} catch (err) {
    if (err && err.message) {
        console.log(err.message);
    }
    process.exit(1);
}
