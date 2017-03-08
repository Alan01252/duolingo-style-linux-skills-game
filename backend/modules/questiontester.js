const debug = require('debug')('linux-skills:questiontester');

class QuestionTester {


    testValidRegex(regex) {

        try {
            new RegExp(regex)
        } catch (ex) {
            return false;
        }

        return true
    }

    testExactMatch(result, row, index = 0) {

        let passed = true;
        if (!result && !row.match) {
            return passed;
        }

        if (!result && row.match) {
            passed = false;
            return passed;
        }

        if (result.length > 1) {
            passed = false;
        }

        if (result[index] != row.match) {
            passed = false;
        }
        return passed
    }

    testAnyMatch(result) {
        debug("Testing if array");
        debug((Array.isArray(result)));

        return (Array.isArray(result))
    }


    testRow(question, row) {
        debug("Text" + row.text);
        debug("Answer" + question.answer);

        let result = row.text.match(question.answer);
        debug("Result");
        debug(result);

        let testResult = false;

        switch (question.answer_type) {
            case "regex_exact":
                testResult = this.testExactMatch(result, row);
                break;
            case "regex_any_match":
                testResult = this.testAnyMatch(result, row);
                break;
            case "regex_exact_match_group":
                testResult = this.testExactMatch(result, row, 1);
                break;
            default:
                testResult = false;
                break;
        }
        debug("Got test result " + testResult + " for matching " + row.match + " answer " + question.answer);

        return testResult;
    }

    test(question) {


        debug("Testing question " + question.question);

        if (!this.testValidRegex(question.answer)) {
            return false
        }

        let passed = [];
        question.rows.some((row) => {
            passed.push(this.testRow(question, row))
        });

        debug(passed);
        debug(!passed.includes(false));

        let matchLength = passed.filter(function (x) {
            return x == true
        }).length;

        if (question.exact_matches) {
            return matchLength === question.exact_matches
        }

        if (question.match_row >= 0) {

            debug(passed[question.match_row]);
            debug(matchLength);

            if (passed[question.match_row] == true && matchLength === 1) {
                return true
            }
            return false
        }

        return !passed.includes(false);
    }


}

module.exports = QuestionTester;
