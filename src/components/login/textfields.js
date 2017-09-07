/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Styles from './textfield.css'
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'

import deepmerge from 'deepmerge'
import _ from 'underscore'
import HasValue from 'has-value'

import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../../actions/types.js'

class textfields extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            errorMessage_name: '',
            errorMessage_password: '',
            open: false,
            login_message: ''
        }

    }

    onchangename(event, newValue) {
        this.setState({
            name: newValue
        })
    }

    onchangepassword(event, newValue) {
        this.setState({
            password: newValue
        })
    }


    clickLogin() {
        var me = this
        var name = this.state.name;
        var password = this.state.password;
        var user = {name, password}
        if (!HasValue(name)) {
            this.setState({
                errorMessage_name: '名字不能爲空'
            })
            return false
        }
        if (!HasValue(password)) {
            this.setState({
                errorMessage_password: '密码不能爲空'
            })
            return false
        }
        else {
            this.setState({
                errorMessage_name: '',
                errorMessage_password: ''
            })
            this.props.actions[LOGIN]({name, password}).then((res) => {
                if (res.success) {
                    /*跳转界面*/
                    me.props.history.push({
                        pathname: '/'
                    })
                } else {
                    me.setState({
                        open: true
                    })
                }
            })

        }

    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="确定"
                primary={true}
                onClick={this.handleClose.bind(this)}
            />
        ];

        return <Paper zDepth={3} className={Styles.wrapper}>
            <div className={Styles._wrapper}>
                <TextField
                    floatingLabelText="名字"
                    fullWidth={true}
                    hintText="name"
                    errorText={this.state.errorMessage_name}
                    onChange={this.onchangename.bind(this)}
                />
                <TextField
                    floatingLabelText="密码"
                    fullWidth={true}
                    hintText="password"
                    errorText={this.state.errorMessage_password}
                    onChange={this.onchangepassword.bind(this)}
                />


                <div className={Styles.btns}>
                    <RaisedButton label="取消" className={Styles.cancelBtn}/>
                    <RaisedButton label="登陆" primary={true} onClick={this.clickLogin.bind(this)}/>
                </div>


                <Dialog
                    title="提示"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    {"登陆失败"}
                </Dialog>
            </div>
        </Paper>
    }
}

export default textfields