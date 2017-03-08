const questions = require('../data/questions.json');

class QuestionGetter {

    get() {
        return questions[Math.floor(Math.random() * questions.length)];
    }
}

module.exports = QuestionGetter;
