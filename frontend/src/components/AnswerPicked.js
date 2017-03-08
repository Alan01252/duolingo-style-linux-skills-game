import React, {Component, PropTypes} from 'react'


import CorrectAnswerPicked from './CorrectAnswerPicked'
import WrongAnswerPicked from './WrongAnswerPicked'

export default class AnswerPicked extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
    };

    render() {
        const {question} = this.props;

        const correct = question.correct;
        console.log("correct" + correct)
        if (correct === true) {
            console.log("here?");
            return <CorrectAnswerPicked />;
        }

        if (correct === false) {
            return <WrongAnswerPicked />;
        }
        return null;
    }
}
