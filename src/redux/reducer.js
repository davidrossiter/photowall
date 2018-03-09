import postsData from '../data/posts.js';
import {combineReducers} from 'redux';

function comments(state = {}, action) {
  switch (action.type) {
    /*create variables in ES6 inside object using []: they are not an array [notArrayButVar]: [anArray]*/
    case "ADD_COMMENT":
      if (!state[action.postId]) {
        return {...state, [action.postId]: [action.comment]}
      } else {
        return {...state, [action.postId]: [...state[action.postId], action.comment]}
      }
    default: return state
  }
}

function posts(state = postsData, action) {
  switch (action.type) {
    /*es6 ... seps array, slice goes from 0 to before our index and thus ignores it, then we add all elements in the array from +1 of our index, making a complete array minus the one we removed. We are returning a new array/state not changing the existing one*/
    case "REMOVE_POST": return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case "ADD_POST": return [...state, action.posts]
    case "LOAD_POSTS": return action.posts
    default: return state
  }
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer
