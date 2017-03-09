(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const QuestionGetter = __webpack_require__(11);

	module.exports.getquestion = (event, context, callback) => {

	    let response = {
	        statusCode: 200
	    };

	    response.body = JSON.stringify(new QuestionGetter().get());

	    callback(null, response);
	};


/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const questions = __webpack_require__(12);

	class QuestionGetter {

	    get() {
	        return questions[Math.floor(Math.random() * questions.length)];
	    }
	}

	module.exports = QuestionGetter;


/***/ },

/***/ 12:
/***/ function(module, exports) {

	module.exports = [
		{
			"question": "Select a regex that exactly matches the string linuxskills",
			"rows": [
				{
					"text": "linuxskills",
					"match": "linuxskills"
				}
			],
			"answer_type": "regex_exact",
			"correct_answers": [
				"linuxskills",
				"^linuxskills",
				"^linuxskills$",
				"...........",
				"\\D*",
				".*",
				"\\w*",
				".+",
				"linux.+"
			],
			"incorrect_answers": [
				"[linuxskills]",
				"^linux",
				".......",
				"linux-skills",
				"(linux)(skills)"
			]
		},
		{
			"question": "Select a regex that matches all rows that start with the letter 'a'",
			"rows": [
				{
					"text": "abcdefg",
					"match": "a"
				},
				{
					"text": "abcde",
					"match": "a"
				},
				{
					"text": "abc",
					"match": "a"
				},
				{
					"text": "b",
					"match": "b"
				}
			],
			"answer_type": "regex_exact",
			"exact_matches": 3,
			"correct_answers": [
				"^a"
			],
			"incorrect_answers": [
				"!a",
				"abc",
				"b",
				".+",
				"\\w"
			]
		},
		{
			"question": "Select a regex that matches the first row only",
			"rows": [
				{
					"text": "Linux Skills",
					"match": "Linux Skills"
				},
				{
					"text": "Linux Skills are great",
					"match": "Linux Skills are great"
				},
				{
					"text": "You have loads of Linux Skills",
					"match": "You have loads of Linux Skills"
				}
			],
			"answer_type": "regex_any_match",
			"match_row": 0,
			"correct_answers": [
				"^Linux Skills$"
			],
			"incorrect_answers": [
				"^Linux Skills",
				"[Linux Skills]",
				"(Skills)"
			]
		},
		{
			"question": "Select a regex that finds any match in exactly two of the rows below",
			"rows": [
				{
					"text": "Linux Skills",
					"match": "Linux Skills"
				},
				{
					"text": "Your Linux Skills are great",
					"match": "Linux Skills"
				},
				{
					"text": "Sweet Windows Skills",
					"match": "Sweet Windows Skills"
				}
			],
			"answer_type": "regex_any_match",
			"exact_matches": 2,
			"correct_answers": [
				"(Linux Skills)",
				"(Linux)",
				"Linux Skills"
			],
			"incorrect_answers": [
				"^Linux Skills",
				"[Linux Skills]",
				"(Skills)"
			]
		},
		{
			"question": "Select a regex that matches the two rows below",
			"rows": [
				{
					"text": "Linuxskills",
					"match": "Linuxskills"
				},
				{
					"text": "linuxskills",
					"match": "linuxskills"
				}
			],
			"answer_type": "regex_exact",
			"correct_answers": [
				"[Ll]inuxskills"
			],
			"incorrect_answers": [
				"^L",
				"^l",
				"linuxskills",
				"Linuxskills"
			]
		},
		{
			"question": "Select a regex that finds any match within all three of the rows below",
			"rows": [
				{
					"text": "abcdefg",
					"match": "a"
				},
				{
					"text": "abcde",
					"match": "a"
				},
				{
					"text": "abc",
					"match": "a"
				}
			],
			"answer_type": "regex_any_match",
			"exact_matches": 3,
			"correct_answers": [
				"^a",
				"abc",
				".*",
				"[a-z]*",
				"[a-z]+",
				"(.*)",
				"[abcdef]"
			],
			"incorrect_answers": [
				"!a",
				"abcdefg"
			]
		},
		{
			"question": "Select a regex that matches all pdf file names starting with linux_skills without the .pdf extension from the rows below",
			"rows": [
				{
					"text": "linux_skills_1234.pdf",
					"match_group": "linux_skills_1234"
				},
				{
					"text": "linux_skills_20160101.pdf",
					"match_group": "linux_skills_20160101.pdf"
				},
				{
					"text": "some_other_linux_skills.pdf"
				},
				{
					"text": "linux_skills_photo.png"
				}
			],
			"answer_type": "regex_exact_match_group",
			"exact_matches": 2,
			"correct_answers": [
				"^(linux_skills.+)\\.pdf*"
			],
			"incorrect_answers": [
				"linux_skills_1234.pdf",
				"^linux_skills",
				"\\.pdf",
				"^(linux_skills.+)('\\.pdf')"
			]
		},
		{
			"question": "Select a regex that matches exact two rows below",
			"rows": [
				{
					"text": "linux 123",
					"match": true
				},
				{
					"text": "123 linux",
					"match": "123 linux"
				},
				{
					"text": "123linux skills",
					"match": true
				},
				{
					"text": "456 linux",
					"match": "456 linux"
				}
			],
			"answer_type": "regex_exact",
			"exact_matches": 2,
			"correct_answers": [
				"\\d+ \\w+",
				"\\d* \\w*",
				".+ .+"
			],
			"incorrect_answers": [
				"^123",
				"(linux)",
				"\\w+ \\d+",
				"\\d \\w+",
				"\\d \\w"
			]
		}
	];

/***/ }

/******/ })));