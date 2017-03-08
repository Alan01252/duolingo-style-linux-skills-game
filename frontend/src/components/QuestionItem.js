import React, {Component, PropTypes} from 'react'


import QuestionAnswer from './QuestionAnswer'
import AnswerPicked from './AnswerPicked'


export default class QuestionItem extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const {question, actions} = this.props;

        const cardStyle = {
            width: '40em',
        };

        return (
            <div className="card" style={cardStyle}>
                <div className="card-block">
                    <h4 className="card-title"> {question.question}</h4>
                </div>
                <ul className="list-group list-group-flush">
                    {question.rows.map(function (row, i) {
                        return <li className="list-group-item" key={row.text}>{row.text}</li>;
                    })}
                </ul>
                <QuestionAnswer
                    question={question}
                    correct_answers={question.correct_answers}
                    incorrect_answers={question.incorrect_answers}
                    send_answer={actions.sendAnswer}
                />
                <AnswerPicked
                    question={question}
                />
            </div>
        )
    }
}
