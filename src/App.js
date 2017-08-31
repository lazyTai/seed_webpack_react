import React, {Component} from 'react';
import Home from './page/home/home'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
