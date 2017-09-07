/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/actionType'

import Header from '../../components/type/header.js'
import RadioList from '../../components/type/radioList.js'

class Type extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <Header title="选择类型" {...this.props}/>
            <RadioList {...this.props}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Type);