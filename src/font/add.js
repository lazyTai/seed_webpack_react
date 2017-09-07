import React, {Component} from 'react';
import SvgIcon from 'material-ui/SvgIcon';


const Icon = function (props) {
    var fill = "#222"
    if (props.style) {
        if (props.style.fill) {
            fill = props.style.fill
        }
    }

    return <SvgIcon {...props}>
        <svg className="icon" viewBox="0 0 1024 1024"
             width="24" height="24" fill={fill}>
            <path
                d="M512 102.4a409.6 409.6 0 1 1-409.6 409.6 409.6 409.6 0 0 1 409.6-409.6m0-102.4a512 512 0 1 0 512 512A512 512 0 0 0 512 0z"
                fill=""></path>
            <path d="M768 460.8H256v102.4h512V460.8z" fill=""></path>
            <path d="M563.2 256H460.8v512h102.4V256z" fill=""></path>
        </svg>
    </SvgIcon>
}

export default Icon