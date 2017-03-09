import React, {Component} from 'react'


export default class CorrectAnswerPicked extends Component {


    render() {

        const style = {
            width: "95%",
            marginLeft: "5px",
            marginRight: "5px",
            margin: "auto"
        };

        return (
            <div style={style}>
                <div className="alert alert-success" role="alert">
                    Correct
                </div>
            </div>
        )
    }
}
