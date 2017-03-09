'use strict';

const QuestionTester = require('../modules/questiontester');

module.exports.answerquestion = (event, context, callback) => {

    let response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    };

    let question = "";
    /**
     * When running on aws the event.body needs parsing, locally using webpack server
     * this is being done automatically...
     *
     * TODO Investigate how to make webpack server *NOT* auto convert json
     */
    try {
        question = JSON.parse(event.body);
    } catch (ex) {
        question = event.body
    }
    question.correct = new QuestionTester().test(question);
    question.rows.map((row, index) => {
        question.rows[index].found_matches = row.text.match(question.answer);
    });
    response.body = JSON.stringify(question)

    callback(null, response);
};