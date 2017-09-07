const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
var proxUrl = 'http://localhost:3003'
module.exports = {
    port: '8888',
    HOST: 'localhost',
    appName: 'webpack1',
    protocol: 'http',
    appPublic: resolveApp('public'),
    proxySetting: {
        "/api/*": {
            host: "localhost",
            target: proxUrl,
            hostRewrite: 'localhost',
            autoRewrite: true,
            changeOrigin: true,
            secure: false,
        }
    },
    paths: {
        publicPath: '/',
        appBuild: resolveApp('build'),
        appIndexJs: resolveApp('src/index.js'),
        appNodeModules: resolveApp('node_modules'),
        appHtml: resolveApp('public/index.html'),
        fontPath: resolveApp('src/font') + '\\',
    }
}