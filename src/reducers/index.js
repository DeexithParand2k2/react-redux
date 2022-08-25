import getAction from './getAction'
import { combineReducers } from 'redux'

const allreducers = combineReducers({
    getAction : getAction
});

export default allreducers;