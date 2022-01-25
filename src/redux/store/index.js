import { createStore } from 'redux'
import { mainReducer } from '../reducers'

// 2)
// the initial state for the app is going to be an object,
// just like the initial state for an individual component...
export const initialState = {
  count: 50,
  loading: false,
  // count is just my example variable
}

// createStore takes 3 arguments:
// 1) the main reducer of you application
// 2) the initial state for your application
// 3) an enhancer function, necessary for e.g. the redux devTools
const configureStore = createStore(
  mainReducer,
  initialState,
  // the third argument is an enhancer/plugin function
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
