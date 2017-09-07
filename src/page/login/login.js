/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/actionLogin'
import {withRouter} from 'react-router-dom'

import Header from '../../components/com/header.js'
import Fileds from '../../components/login/textfields.js'

class LoginList extends Component {
    render() {
        return <div>
            <Header title="登陆"  {...this.props}/>
            <Fileds {...this.props}/>
        </div>
    }
}

var mapStateToProps = function (state) {
    return state;
};

var mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators(actions.default, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginList);