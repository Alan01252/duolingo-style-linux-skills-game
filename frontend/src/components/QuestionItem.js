import React, {Component, PropTypes} from 'react'


export default class QuestionItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        question: PropTypes.object.isRequired
    };

    render() {
        const {item, question} = this.props;


        let text = item.text;
        if (item.found_matches) {
            let index = 0;
            if (question.answer_type === "regex_exact_match_group") {
                if (item.found_matches[1]) {
                    index = 1;
                }
            }
            if (question.answer_type === "regex_exact") {
                if (item.match === item.found_matches[0]) {
                    text = item.text.replace(item.found_matches[index], "<span class='lead' style='color:green'>" + item.found_matches[index] + "</span>");
                }
            } else {
                text = item.text.replace(item.found_matches[index], "<span class='lead' style='color:green'>" + item.found_matches[index] + "</span>");
            }
        }


        function createMarkup(text) {
            return {__html: text};
        }


        return (
            <span dangerouslySetInnerHTML={createMarkup(text)}></span>
        )
    }
}