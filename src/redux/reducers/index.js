// 1) the main reducer function
// a reducer is a pure js function
// pure means: with the same input, it will always output the same result
// without any side-effect
// a reducer is really like a robot, can do few things, very precise operations

import { DECREASE_COUNTER, INCREASE_COUNTER } from '../actions'
import { initialState } from '../store'

// the purpose of the reducer: take the existing state, the last action dispatched
// and compute the new state of the app

export const mainReducer = (state = initialState, action) => {
  // the reducer will generate the new state of the application
  switch (action.type) {
    // the type of an action is a mandatory property,
    // it will describe what the action wants to do
    // it will always be a string
    case INCREASE_COUNTER: {
      return {
        // what is the new state of the application if we encounter
        // an action of type 'INCREASE_COUNTER' ?
        ...state,
        // the ...state spread operator brings over count and loading
        count: state.count + 10,
      }
    }
    case DECREASE_COUNTER: {
      return {
        ...state,
        count: state.count - 10,
      }
    }
    default:
      // the default case doesn't change the state
      // this is for not breaking anything if an unknown action type
      // is dispatched
      return state
  }
}

// now that you understand that every action.type requires a reducer case,
// you can also understand why the reducer can be called a "finite-state machine"

// the reducer is a PURE FUNCTION (same input, consistent output! and no side-effects)
// the reducer is IMMUTABLE (not changing its arguments, particularly the state)
// the reducer is PREDICTABLE (every change in the state is atomic and mathematic)
