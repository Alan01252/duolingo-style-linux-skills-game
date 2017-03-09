'use strict';

const debug = require('debug')('linux-skills:questiontester');

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function(searchElement, fromIndex) {

            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }

            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;

            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                // c. Increase k by 1.
                // NOTE: === provides the correct "SameValueZero" comparison needed here.
                if (o[k] === searchElement) {
                    return true;
                }
                k++;
            }

            // 8. Return false
            return false;
        }
    });
}

if (!String.prototype.includes) {
    String.prototype.includes = function() {
        'use strict';
    };
}

class QuestionTester {


    testValidRegex(regex) {

        try {
            new RegExp(regex)
        } catch (ex) {
            return false;
        }

        return true
    }

    testExactMatch(result, row, index) {

        let passed = true;
        if (!index) {
            index = 0;
        }
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

    includes(search, start) {
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    }

    test(question) {


        debug("Testing question " + question.question);

        if (!this.testValidRegex(question.answer)) {
            return false
        }

        let passed = [];

        question.rows.map((row) => {
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
