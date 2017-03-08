'use strict';

const QuestionGetter = require('./modules/questiongetter');
const QuestionTester = require('./modules/questiontester');

module.exports.question = (event, context, callback) => {

    let response = {
        statusCode: 200
    };

    console.log(context);
    console.log(event);

    if (event.method === "GET") {
        response.body = JSON.stringify(new QuestionGetter().get());
    }

    if (event.method === "POST") {
        let question = event.body;
        question.correct = new QuestionTester().test(question);
        response.body = JSON.stringify(question)
    }

    callback(null, response);
};
