/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/actionRegister'
import {withRouter} from 'react-router-dom'

import Header from '../../components/com/header.js'
import Fileds from '../../components/register/textfields.js'

class RegisterList extends Component {
    render() {
        return <div>
            <Header title="注册" {...this.props}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(RegisterList);