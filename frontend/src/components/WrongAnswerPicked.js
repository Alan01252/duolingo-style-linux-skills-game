import React, {Component} from 'react'


export default class WrongAnswerPicked extends Component {


    render() {

        return (
            <div className="card-block">
                <div className="alert alert-danger" role="alert">
                    Wrong
                </div>
            </div>
        )
    }
}
