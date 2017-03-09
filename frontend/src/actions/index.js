import * as types from '../constants/ActionTypes'

export const sendAnswer = question => ({ type: types.POST_ANSWER_QUESTION, question })
export const getQuestion = question => ({ type: types.GET_QUESTION_DATA, question })

