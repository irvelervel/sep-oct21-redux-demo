import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

// mapStateToProps is a function returning an object
// its purpose is to define WHICH properties of the redux store
// you want this component to receive. these redux store properties (like count)
// will be mapped to the PROPS of this component
const mapStateToProps = (state) => {
  // state, the argument, is the WHOLE redux store
  // every property of the object you're returning from mapStateToProps
  // is going to be given as a prop of this component
  // return state // <-- this is returning ALL THE PROPERTIES as props
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // mapDispatchToProps will give your components METHODS as props
    increaseCounter: () => {
      // when you call increaseCounter, you will dispatch an action
      dispatch({
        type: 'INCREASE_COUNTER',
        // the type is a string, it's also the only mandatory property
        // should describe what you want to do with this action
      })
    },
  }
}

// when you connect a component to the redux store, mapStateToProps is going
// to decide which properties you're going to be able to READ
// mapStateToProps --> READ ONLY
// mapDispatchToProps --> DISPATCHING ACTIONS --> CHANGING THE STATE

function App({ count, increaseCounter }) {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button onClick={increaseCounter}>+</Button>
        <div>The count value is: {count}</div>
        <Button>-</Button>
      </header>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// this will create a HOC -> higher order component
// a HOC has MORE PROPS than the ones you're invoking it with

// now the redux store is alive!
// you can connect any component you like to it
// for reading the values, or providing changes to them (creating new states)

// how do you connect App to the redux store? using the connect function from 'react-redux'
