/*
*
刘明泰
mail:1352983234@qq.com
github:lazyTai
*/
import React, {Component} from 'react';
import Chip from 'material-ui/Chip';

class ChipsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chipData: [
                {key: 0, label: 'Angular'},
                {key: 1, label: 'JQuery'},
                {key: 2, label: 'Polymer'},
                {key: 3, label: 'ReactJS'},
                {key: 4, label: 'ReactJS'},
                {key: 5, label: 'ReactJS'},
                {key: 6, label: 'ReactJS'},
                {key: 7, label: 'ReactJS'},
                {key: 8, label: 'ReactJS'},
            ]
        };
        this.styles = {
            chip: {
                margin: 4,
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap',
                margin: 10
            },
        };
    }

    clickItem(data) {
        data
    }

    renderChip(data) {
        return (
            <Chip
                key={data.key}
                style={this.styles.chip}
                onClick={this.clickItem.bind(this, data)}
            >
                {data.label}
            </Chip>
        );
    }


    render() {
        return (
            <div style={this.styles.wrapper}>
                {this.state.chipData.map(this.renderChip, this)}
            </div>
        );
    }
}

export default ChipsList