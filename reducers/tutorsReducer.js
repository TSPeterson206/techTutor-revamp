import {
  combineReducers
} from 'redux';

import { GET_TUTORS } from '../actions/tutors'

export const tutorsData = (state = {}, {type,payload}) => {
  switch (type) {
    case GET_TUTORS:
      return {
        ...state,
        tutors:payload
      }
    default:
      return state
  }
};