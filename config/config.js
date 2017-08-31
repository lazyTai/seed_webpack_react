const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    port: '8888',
    HOST: 'localhost',
    appName: 'webpack1',
    protocol: 'http',
    appPublic: resolveApp('public'),
    proxySetting: {
        "/api": {
            "target": "http://localhost:3001/"
        }
    },
    paths: {
        publicPath:'/',
        appBuild: resolveApp('build'),
        appIndexJs: resolveApp('src/index.js'),
        appNodeModules: resolveApp('node_modules'),
        appHtml: resolveApp('public/index.html'),
    }
}