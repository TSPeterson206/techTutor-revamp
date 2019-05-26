import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { tutorsData } from './reducers/tutorsReducer'

const reducers = combineReducers({tutorsData})

export default store = createStore(reducers, applyMiddleware(logger, thunk))
