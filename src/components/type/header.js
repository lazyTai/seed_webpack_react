/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import BackIcon from '../../font/back.js'

class header extends Component {
    onLeftIconButtonTouchTap(){
        this.props.history.push({
            pathname:'/editor'
        })
    }
    render() {
        return <AppBar
            onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap.bind(this)}
            title={this.props.title || "title"}
            iconStyleLeft={{"marginTop": '20px'}}
            iconElementLeft={<BackIcon style={{color: '#fff'}}/>}
        />
    }
}

export default header