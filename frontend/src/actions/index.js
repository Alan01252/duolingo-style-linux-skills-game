import * as types from '../constants/ActionTypes'

export const sendAnswer = question => ({ type: types.POST_ANSWER_QUESTION, question })

