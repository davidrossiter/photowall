import posts from '../data/posts.js';
import {combineReducers} from 'redux';

function comments(state = [], action) {
  return state
}

function posts(state = posts, action) {
  switch (action.type) {
    /*es6 ... seps array, slice goes from 0 to before our index and thus ignores it, then we add all elements in the array from +1 of our index, making a complete array minus the one we removed. We are returning a new array/state not changing the existing one*/
    case "REMOVE_POST": return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case "ADD_POST": return [...state, action.posts]
    default: return state
  }
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer
