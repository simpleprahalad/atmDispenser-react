import React from 'react'
import LeftPane from './LeftPane';
import List from './List';

const h2Style = {
    textAlign : "left",
    marginLeft: "40px"
}

class RightPane extends React.Component {

    constructor() {
        super()
        this.handleValue = this.handleValue.bind(this)
    }

    getNotes(total) {
        var result = {};
        var arr = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
            arr.forEach(function(num){
                let obj = {};
                obj[num] = Math.trunc(total/num);
                total = total - (Math.trunc(total/num)*num);
                Object.assign(result,obj);
            });
        return result;
    };

    handleValue() {
        return this.getNotes(this.props.value)
    }

    render() {
        return (
            <div className="right-pane">
                <h2 style={h2Style}>You will get following amount </h2>
                <List count={this.handleValue()} />
            </div>
        )
    }
}

export default RightPane