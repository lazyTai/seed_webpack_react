import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App.js';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./App.js', function () {
        const App = require('./App').default;
        ReactDOM.render(<App/>, document.getElementById('root'));
        registerServiceWorker();
    })
}
