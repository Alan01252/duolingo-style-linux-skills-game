export default function question(state = [], action) {
    switch (action.type) {
        case 'GET_QUESTION_DATA_RECEIVED':
            return action.data;
        case 'POST_QUESTION_DATA_RECEIVED':
            return action.data;
        default:
            return {
                rows: [],
                correct_answers: [],
                incorrect_answers: []
            }
    }
}