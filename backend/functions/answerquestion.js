'use strict';

const QuestionTester = require('../modules/questiontester');

module.exports.answerquestion = (event, context, callback) => {

    let response = {
        statusCode: 200
    };

    console.log(context);
    console.log(event);
    let question = event.body;
    question.correct = new QuestionTester().test(question);
    console.log(new QuestionTester().test(question));
    console.log(question.correct);
    question.rows.map((row, index) => {
        question.rows[index].found_matches = row.text.match(question.answer);
    });
    response.body = JSON.stringify(question)

    callback(null, response);
};