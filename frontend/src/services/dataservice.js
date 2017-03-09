import request from 'superagent'
import * as types from '../constants/ActionTypes'

const dataService = store => next => action => {

    next(action);
    switch (action.type) {
        case types.GET_QUESTION_DATA:
            request
                .get('https://pf0zn3uwi5.execute-api.eu-west-2.amazonaws.com/dev/question')
                .end((err, res) => {

                    console.log(err);
                    console.log(res);

                    if (err) {
                        return next({
                            type: 'GET_QUESTION_ERROR',
                            err
                        })
                    }
                    const data = JSON.parse(res.text);
                    next({
                        type: 'GET_QUESTION_DATA_RECEIVED',
                        data
                    })
                });
            break;
        case 'POST_ANSWER_QUESTION':

            console.log(action);
            request
                .post('https://pf0zn3uwi5.execute-api.eu-west-2.amazonaws.com/dev/question')
                .send(action.question)
                .end((err, res) => {

                    const data = JSON.parse(res.text);
                    next({
                        type: "POST_QUESTION_DATA_RECEIVED",
                        data
                    })
                });
            break;
        default:
            break
    }

};

export default dataService