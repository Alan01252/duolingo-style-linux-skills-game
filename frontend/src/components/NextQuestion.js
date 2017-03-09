import React, {Component} from 'react'


export default class CorrectAnswerPicked extends Component {

    render() {


        const {question, get_question} = this.props;

        const style = {
            margin: "5px",
            cursor: "pointer"
        };

        if (question.correct === true) {
            return (
                <div>
                    <button type="button"  style={style}
                            onClick={() => {
                                get_question()
                            }}
                            className="btn btn-secondary float-sm-right">Next Question
                    </button>
                </div>
            )
        }

        return null;

    }
}