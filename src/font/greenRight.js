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
                d="M512 0C229.20192 0 0 229.20192 0 512s229.20192 512 512 512 512-229.20192 512-512S794.79808 0 512 0zM442.19904 825.90208c-87.5008-110.8992-190.39744-195.39968-262.5024-221.7984l169.8048-105.60512 82.29888 163.70176s133.80096-332.6976 344.80128-443.49952c-5.09952 79.20128-25.7024 147.79904 10.29632 232.2944-92.60032 21.10464-282.99776 258.70336-344.69888 374.90688z"
                fill="#58D043"></path>
        </svg>
    </SvgIcon>
}

export default Icon