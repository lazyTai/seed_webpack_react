/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import login from '../../font/login.svg'
import Styles from './content.css'

class Content extends Component {

    Logined() {
    }

    Loging() {

    }

    render() {
        return (
            <div>

                <Card className={Styles.card}>
                    <CardHeader
                        title="文章的名字"
                        subtitle="作者"
                    >
                        <div className={Styles.contentWrapper}>
                            <div className={Styles.content}>
                                hello\n<br/>
                                asda<br/>
                                asdasn<br/>
                                asdasd<br/>
                                asdasd<br/>
                            </div>
                            <div className={Styles.footer}>
                                <div className={Styles.time}>2001-12-39</div>
                                <div className={Styles.like}>喜歡&nbsp;&nbsp;11</div>
                                <div>留言&nbsp;&nbsp;12</div>
                            </div>
                        </div>

                    </CardHeader>
                </Card>
                <Card className={Styles.card}>
                    <CardHeader
                        title="文章的名字"
                        subtitle="作者"
                    >
                        <div className={Styles.contentWrapper}>
                            <div className={Styles.content}>
                                hello\n<br/>
                                asda<br/>
                                asdasn<br/>
                                asdasd<br/>
                                asdasd<br/>
                            </div>
                            <div className={Styles.footer}>
                                <div className={Styles.time}>2001-12-39</div>
                                <div className={Styles.like}>喜歡&nbsp;&nbsp;11</div>
                                <div>留言&nbsp;&nbsp;12</div>
                            </div>
                        </div>

                    </CardHeader>
                </Card>

                <Card className={Styles.card}>
                    <CardHeader
                        title="文章的名字"
                        subtitle="作者"
                    >
                        <div className={Styles.contentWrapper}>
                            <div className={Styles.content}>
                                hello\n<br/>
                                asda<br/>
                                asdasn<br/>
                                asdasd<br/>
                                asdasd<br/>
                            </div>
                            <div className={Styles.footer}>
                                <div className={Styles.time}>2001-12-39</div>
                                <div className={Styles.like}>喜歡&nbsp;&nbsp;11</div>
                                <div>留言&nbsp;&nbsp;12</div>
                            </div>
                        </div>

                    </CardHeader>
                </Card>
                <Card className={Styles.card}>
                    <CardHeader
                        title="文章的名字"
                        subtitle="作者"
                    >
                        <div className={Styles.contentWrapper}>
                            <div className={Styles.content}>
                                hello\n<br/>
                                asda<br/>
                                asdasn<br/>
                                asdasd<br/>
                                asdasd<br/>
                            </div>
                            <div className={Styles.footer}>
                                <div className={Styles.time}>2001-12-39</div>
                                <div className={Styles.like}>喜歡&nbsp;&nbsp;11</div>
                                <div>留言&nbsp;&nbsp;12</div>
                            </div>
                        </div>

                    </CardHeader>
                </Card>
                <Card className={Styles.card}>
                    <CardHeader
                        title="文章的名字"
                        subtitle="作者"
                    >
                        <div className={Styles.contentWrapper}>
                            <div className={Styles.content}>
                                hello\n<br/>
                                asda<br/>
                                asdasn<br/>
                                asdasd<br/>
                                asdasd<br/>
                            </div>
                            <div className={Styles.footer}>
                                <div className={Styles.time}>2001-12-39</div>
                                <div className={Styles.like}>喜歡&nbsp;&nbsp;11</div>
                                <div>留言&nbsp;&nbsp;12</div>
                            </div>
                        </div>

                    </CardHeader>
                </Card>
                <Card className={Styles.card}>
                    <CardHeader
                        title="文章的名字"
                        subtitle="作者"
                    >
                        <div className={Styles.contentWrapper}>
                            <div className={Styles.content}>
                                hello\n<br/>
                                asda<br/>
                                asdasn<br/>
                                asdasd<br/>
                                asdasd<br/>
                            </div>
                            <div className={Styles.footer}>
                                <div className={Styles.time}>2001-12-39</div>
                                <div className={Styles.like}>喜歡&nbsp;&nbsp;11</div>
                                <div>留言&nbsp;&nbsp;12</div>
                            </div>
                        </div>

                    </CardHeader>
                </Card>
            </div>
        )
    }
}

export default Content