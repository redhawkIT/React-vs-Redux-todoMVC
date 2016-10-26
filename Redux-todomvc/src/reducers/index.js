import { combineReducers } from 'redux'
import todos from './todos'


// Combines multiple reducers into a single reducing function with each reducer as a
// key/value pair. Can then be passed to createStore().
const rootReducer = combineReducers({
  todos
})

export default rootReducer
