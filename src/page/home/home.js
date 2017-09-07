import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {POST} from '../../actions/actionHome'

/*component*/
import Header1 from '../../components/com/header.js'
import Content from '../../components/home/Content.js'
import Bottom from '../../components/home/Bottom.js'
import Chips from '../../components/home/chips.js'
import {withRouter} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.POST(1);
    }

    render() {

        return <div>
            <Header1 {...this.props}/>
            <Chips {...this.props}/>
            <Content {...this.props}/>
            <Bottom {...this.props}/>
            {/*{this.props.message.hello}*/}
        </div>
    }
}

var mapStateToProps = function (state) {
    return state
}
var actionStateToProps = function (dispatch) {
    return {
        POST: bindActionCreators(POST, dispatch)
    };
}
export default connect(mapStateToProps, actionStateToProps)(Home);