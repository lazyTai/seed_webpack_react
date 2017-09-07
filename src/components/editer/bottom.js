/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Styles from './edite.css'

import SaveIcon from '../../font/save.js'
import TypeIcon from '../../font/type.js'
import ImageIcon from '../../font/image.js'

class BooksList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0
        }
    }

    gotoType() {
        this.props.history.push('/type')
    }

    select(index) {
        var me = this
        me.setState({selectedIndex: index});
        switch (index) {
            case 1:
                /*类型*/
                me.gotoType()
                return;
            default:
                break;
        }
    }

    render() {
        var type = this.props.types.selectTyped.name;
        if (type) {
        } else {
            type = '请选择类型'
        }
        return <div className={Styles.bottomWrapper}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                    label="图片"
                    icon={<ImageIcon/>}
                    onClick={() => this.select(0)}
                />

                <BottomNavigationItem
                    label={"类型:" + type }
                    icon={<TypeIcon/>}
                    onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                    label="保存"
                    icon={<SaveIcon/>}
                    onClick={() => this.select(2)}
                />
            </BottomNavigation>
        </div>
    }
}

export default BooksList