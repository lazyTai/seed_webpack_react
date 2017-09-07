/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Styles from './header.css'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

const LoginIcon = require('../../font/login').default;
const SearchIcon = require('../../font/search').default;
const HomeIcon = require('../../font/home').default;

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            open: false
        }
    }


    goback() {
        this.props.history.push('/home')
    }

    changeShow() {
        this.setState({
            show: !this.state.show
        })
    }

    onSelect(params) {
        var me = this;
        switch (params.props.value) {
            case 'login':

                return '1';
            default :
                me.setState({
                    show: !me.state.show
                })
                break;
        }
    }

    onTitleTouchTap(event) {
        this.gotoHome()
    }

    onRightIconButtonTouchTap(event) {

    }

    onLeftIconButtonTouchTap(event) {
        this.setState({open: !this.state.open});
    }

    gotologin() {
        this.props.history.replace({
            pathname: '/login',
            state: {a: '1'}
        })
    }

    gotoHome() {
        this.props.history.replace({
            pathname: '/',
        })
    }

    gotoRegister() {
        this.props.history.replace({
            pathname: '/register'
        })
    }

    render() {
        var title = this.props.title ? this.props.title : '儿童乐园'
        return <div>
            <AppBar
                title={title}
                iconElementRight={
                    <div onClick={this.onRightIconButtonTouchTap.bind(this)}>
                        <IconMenu
                            iconButtonElement={<IconButton><LoginIcon/></IconButton>}
                            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                        >
                            <MenuItem primaryText="登陆" onClick={this.gotologin.bind(this)}/>
                            <MenuItem primaryText="注册" onClick={this.gotoRegister.bind(this)}/>
                            <MenuItem primaryText="注销"/>
                        </IconMenu>
                    </div>

                }
                onTitleTouchTap={this.onTitleTouchTap.bind(this)}
                onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap.bind(this)}
            />

            <Drawer width={200} open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({open})}
            >
                <MenuItem onClick={
                    () => {
                        this.props.history.push('/')
                    }
                }>
                    <div className={Styles.menuItem}>
                        <HomeIcon/>
                        <div>主页</div>
                    </div>
                </MenuItem>


                <MenuItem>
                    <div className={Styles.menuItem}>
                        <SearchIcon/>
                        <div>搜索</div>
                    </div>

                </MenuItem>
            </Drawer>
        </div>

    }
}

export default Header