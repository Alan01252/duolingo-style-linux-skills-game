const assert = require('assert');
const questions = require('../data/questions.json');
const QuestionTester = require('../modules/questiontester');

describe('QuestionTester', function () {
    describe('#test()', function () {

        it('should return true when given a valid answer to a question', function () {

            questions.forEach(function (question) {
                let currentQuestion = question;
                currentQuestion.correct_answers.forEach(function (answer) {
                    currentQuestion.answer = answer;
                    assert.equal(true, new QuestionTester().test(currentQuestion));
                })
            })

        });

        it('should return false if a incorrect answer is given', function () {
            questions.forEach(function (question) {
                const currentQuestion = question;
                currentQuestion.incorrect_answers.forEach(function (answer) {
                    currentQuestion.answer = answer;
                    const message = currentQuestion.question + " expected false got true for match answer " + answer;
                    assert.equal(false, new QuestionTester().test(currentQuestion), message);
                })
            })
        });

        it('should return false if an invalid regex is given', function () {
            assert.equal(false,
                new QuestionTester().test({
                    "question": "Invalid regex test",
                    "answer": '*'
                })
            )
        })
    });
});