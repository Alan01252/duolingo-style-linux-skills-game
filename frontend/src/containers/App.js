import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import MainSection from '../components/MainSection'

import * as QuestionActions from '../actions'

const App = ({question, actions}) => (
    <div>
        <MainSection question={question} actions={actions}/>
    </div>
);

App.propTypes = {
    question: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    question: state.question
});


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(QuestionActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)