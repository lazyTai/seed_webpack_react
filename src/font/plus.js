import React, {Component} from 'react';
import SvgIcon from 'material-ui/SvgIcon';


const Icon = function (props) {
    return <SvgIcon {...props}>
        <svg className="icon" viewBox="0 0 1024 1024"
             width="24" height="24">
            <path
                d="M790.82 62.296h-557.64c-94.226 0-170.884 76.657-170.884 170.884v557.639c0 94.226 76.657 170.884 170.884 170.884h557.64c94.226 0 170.884-76.657 170.884-170.884v-557.639c0-94.225-76.658-170.884-170.884-170.884zM829.966 595.683h-234.283v234.283h-167.365v-234.283h-234.283v-167.365h234.283v-234.284h167.366v234.283h234.282v167.366z"
            ></path>
        </svg>
    </SvgIcon>
}

export default Icon