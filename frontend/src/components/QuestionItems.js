import React, {Component, PropTypes} from 'react'


import QuestionAnswer from './QuestionAnswer'
import QuestionItem from'./QuestionItem'
import AnswerPicked from './AnswerPicked'


export default class QuestionItems extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const {question, actions} = this.props;

        const cardStyle = {
            maxWidth: '40em',
        };

        return (
            <div className="card" style={cardStyle}>
                <div className="card-block">
                    <h4 className="card-title"> {question.question}</h4>
                </div>
                <AnswerPicked
                    question={question}
                />
                <ul className="list-group list-group-flush">
                    {question.rows.map(function (row, i) {
                        return <li className="list-group-item" key={i}>
                            <QuestionItem key={i} item={row} question={question}/>
                        </li>
                    })}
                </ul>
                <QuestionAnswer
                    question={question}
                    correct_answers={question.correct_answers}
                    incorrect_answers={question.incorrect_answers}
                    send_answer={actions.sendAnswer}
                />

            </div>
        )
    }
}
