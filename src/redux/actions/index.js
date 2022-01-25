// these are called ACTION CREATORS
// these are functions returning actions

export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'

export const increaseCounterAction = () => ({
  type: INCREASE_COUNTER,
  // the type is a string, it's also the only mandatory property
  // should describe what you want to do with this action
})
// long version below:
// const increaseCounterAction = () => {
//   return {
//     type: 'INCREASE_COUNTER',
//     // the type is a string, it's also the only mandatory property
//     // should describe what you want to do with this action
//   }
// }

export const decreaseCounterAction = () => ({
  type: DECREASE_COUNTER,
})
