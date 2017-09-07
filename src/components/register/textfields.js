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
import RaisedButton from 'material-ui/RaisedButton';

class textfields extends Component {

    render() {
        var error = '';
        return <Paper zDepth={3} className={Styles.wrapper}>
            <div className={Styles._wrapper}>
                <TextField
                    floatingLabelText="名字"
                    fullWidth={true}
                    hintText="name"
                    errorText={error}
                />
                <TextField
                    floatingLabelText="密码"
                    fullWidth={true}
                    hintText="password"
                    errorText={error}
                />
                <TextField
                    floatingLabelText="第二输入密码"
                    fullWidth={true}
                    hintText="password"
                    errorText={error}
                />

                <div className={Styles.btns}>
                    <RaisedButton label="取消" className={Styles.cancelBtn}/>
                    <RaisedButton label="注册" primary={true}/>
                </div>

            </div>
        </Paper>
    }
}

export default textfields