import {
  combineReducers
} from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: [
    'Allie',
    'Gator',
    'Lizzie',
    'Reptar',
  ],
};

const tutors = 'Ringo, John, Paul, George'

export const tutorsTwo = n => ({
  type: tutors,
  payload:n,
})

const tutorsReducer = (state = '', {type,payload}) => {
  switch (type) {
    case tutors:
      return state + payload;
    default:
      return state
  }
};

export default combineReducers({
  tutors: tutorsReducer,
});