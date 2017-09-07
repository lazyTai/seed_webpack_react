/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';

import {List, ListItem} from 'material-ui/List';
import GeenRightIcon from '../../font/greenRight'
import GreyDui from '../../font/greyDui'
import AddIcon from '../../font/add'
import Styles from './radioList.css'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class radioList extends Component {


    constructor(props) {
        super(props)
        this.state = {
            open: false,
            addTypeName: '',
            errorMessage: ''
        }
    }

    handleOpen() {
        this.setState({open: true, errorMessage: '', addTypeName: ''});
    };

    handleClose() {
        var me = this;
        if (this.state.addTypeName) {
            this.setState({open: false});
            /*提交*/
            me.props.actions.ADD_TYPE({name: me.state.addTypeName}).then((res) => {
                me.props.actions.TYPE_POST()
            })
        } else {
            this.setState({
                errorMessage: "不能空"
            })
        }
    };

    componentWillMount() {
        this.props.actions.TYPE_POST()
    }

    clickListItem(item) {
        this.props.actions.CHANGE_TYPE(item)
    }

    addItem() {
        this.setState({
            open: true
        })
    }

    onchangeValue(e) {
        var value = e.target.value;
        this.setState({
            addTypeName: value
        })
    }

    renderItem() {
        var me = this;
        var html = []
        this.props.types.typeRows.map(function (item) {
                if (item.id == me.props.types.selectTyped.id) {
                    html.push(<ListItem onClick={me.clickListItem.bind(me, item)}>
                        <div className={Styles.listItem}>
                            <GeenRightIcon style={{marginRight: '10px'}}/>
                            {item.name}
                        </div>
                    </ListItem>)
                } else {
                    html.push(<ListItem onClick={me.clickListItem.bind(me, item)}>
                        <div className={Styles.listItem}>
                            <GreyDui style={{marginRight: '10px'}}/>
                            {item.name}
                        </div>
                    </ListItem>)
                }

            }
        )
        return html
    }


    render() {
        var me = this;
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose.bind(this)}
            />,
        ];

        return <div>
            <ListItem onClick={this.addItem.bind(this)}>
                <div className={Styles.listItem}>
                    <AddIcon style={{marginRight: '10px'}}/>
                    添加
                </div>
            </ListItem>
            <List>
                {me.renderItem.call(me)}
            </List>

            <Dialog
                title="添加类型"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={() => {
                    this.setState({open: false})
                }}
            >
                输入类型的名字：<br/>
                <TextField
                    hintText="类型"
                    value={this.state.addTypeName}
                    errorText={this.state.errorMessage}
                    onChange={this.onchangeValue.bind(this)}
                />
            </Dialog>
        </div>
    }
}

export default radioList