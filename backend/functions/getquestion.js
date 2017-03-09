'use strict';

const QuestionGetter = require('../modules/questiongetter');

module.exports.getquestion = (event, context, callback) => {

    let response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    };

    response.body = JSON.stringify(new QuestionGetter().get());

    callback(null, response);
};
