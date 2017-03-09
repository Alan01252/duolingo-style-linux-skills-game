import React, {Component, PropTypes} from 'react'
import QuestionItems from './QuestionItems'


export default class MainSection extends Component {

    static propTypes = {
        question: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };


    render() {
        const { question, actions } = this.props

        const containerStyle = {
            "maxWidth": "46rem"
        };

        return (
            <div className="container" style={containerStyle}>
                <section className="main">
                    <QuestionItems question={question} actions={actions}/>
                </section>
            </div>
        )
    }
}

