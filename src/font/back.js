import React, {Component} from 'react';
import SvgIcon from 'material-ui/SvgIcon';


const Icon = function (props) {
    return <SvgIcon {...props}>
        <svg className="icon" viewBox="0 0 1024 1024"
             width="24" height="24" fill={props.style.fill}>
            <path
                d="M593.92 796.16l-220.16-222.72-61.44-61.44 61.44-61.44 220.16-222.72 61.44 61.44-222.72 222.72 220.16 222.72-58.88 61.44zM512 84.48C276.48 84.48 84.48 276.48 84.48 512S276.48 939.52 512 939.52 939.52 747.52 939.52 512 747.52 84.48 512 84.48zM512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z"
            ></path>
        </svg>
    </SvgIcon>
}

export default Icon