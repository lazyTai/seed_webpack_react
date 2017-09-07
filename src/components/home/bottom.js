/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';

import LoginIcon from "../../font/login"
import PlusIcon from "../../font/plus"
import Styles from './bottom.css'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

function wrapp(icon) {
    return icon()
}

class Bottom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
        };
    }

    select(index) {
        this.setState({selectedIndex: index})
        this.props.history.push('/editor')
    }

    render() {
        return <div className={Styles.bottom}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>

                <BottomNavigationItem
                    label="我的"
                    icon={<LoginIcon/>}
                    onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                    label=""
                    icon={<PlusIcon/>}
                    onClick={() => this.select(2)}
                />
            </BottomNavigation>
        </div>

    }
}

export default Bottom