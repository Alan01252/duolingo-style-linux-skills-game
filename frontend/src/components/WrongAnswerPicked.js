import React, {Component} from 'react'


export default class WrongAnswerPicked extends Component {


    render() {

        const style = {
            width: "95%",
            marginLeft: "5px",
            marginRight: "5px",
            margin: "auto"
        };

        return (
            <div className="card-blockquote" style={style}>
                <div className="col alert alert-danger" role="alert">
                    Wrong
                </div>
            </div>
        )
    }
}
