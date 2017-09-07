/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/HomeAction'

class search extends Component {
    render() {

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
export default connect(mapStateToProps, mapDispatchToProps)(search);