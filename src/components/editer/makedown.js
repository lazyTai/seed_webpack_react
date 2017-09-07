/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';


import Header from '../../components/com/header.js'
import Bottom from './bottom'
import Styles from './edite.css'
import viewportSize from 'get-viewport-size'
import {Tabs, Tab} from 'material-ui/Tabs';
import {markdown} from 'markdown'
import {
    EDITER_TITLE,
    EDITER_CONTENT,
} from '../../actions/types.js'

class makedown1 extends Component {
    constructor(props) {
        super(props);
    }

    changeTitle(e) {
        this.props.actions.EDITER_TITLE(e.target.value)
    }

    textonChange(e) {
        this.props.actions.EDITER_CONTENT(e.target.value)
    }

    render() {
        var height = (viewportSize().height);
        var content = this.props.editer.artitle.content
        var text = markdown.toHTML(content)
        var title = this.props.editer.artitle.title
        return <div>
            <Header {...this.props}/>

            <Tabs tabItemContainerStyle={{backgroundColor: '#494941'}}>
                <Tab label="编辑">
                    <div>
                        <input type="text" className={Styles.title} placeholder="title"
                               value={title}
                               onChange={this.changeTitle.bind(this)}
                        />
                        <textarea className={Styles.text}
                                  style={{height: height + 'px'}}
                                  value={content}
                                  onChange={this.textonChange.bind(this)}
                        />
                        <Bottom {...this.props}/>
                    </div>
                </Tab>
                <Tab label="预览">
                    <div className={Styles.reviews}>
                        <h1 className={Styles.reviews_title}>{title}</h1>
                        <div dangerouslySetInnerHTML={{__html: text}}></div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    }
}

export default makedown1