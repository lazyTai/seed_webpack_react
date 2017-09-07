import React, {Component} from 'react';
import {Provider} from 'react-redux';


import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducers from './redux/reducer/reducer'

/*router*/
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'


import Home from './page/home/home'
import Login from './page/login/login.js'
import Register from './page/register/register.js'
import Editor from './page/edit/edit.js'
import Type from './page/type/type.js'

const history = createHistory()
const middleware = routerMiddleware(history)

// store.dispatch(actions().POST(1))
var store = createStore(reducers, applyMiddleware(thunk, middleware));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <MuiThemeProvider>
                        <div>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/editor" component={Editor}/>
                            <Route exact path="/type" component={Type}/>
                        </div>
                    </MuiThemeProvider>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App;
