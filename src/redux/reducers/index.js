// 1) the main reducer function
// a reducer is a pure js function
// pure means: with the same input, it will always output the same result
// without any side-effect
// a reducer is really like a robot, can do few things, very precise operations

import { initialState } from '../store'

// the purpose of the reducer: take the existing state, the last action dispatched
// and compute the new state of the app

export const mainReducer = (state = initialState, action) => {
  // the reducer will generate the new state of the application
  switch (action.type) {
    // the type of an action is a mandatory property,
    // it will describe what the action wants to do
    // it will always be a string
    default:
      // the default case doesn't change the state
      // this is for not breaking anything if an unknown action type
      // is dispatched
      return state
  }
}
