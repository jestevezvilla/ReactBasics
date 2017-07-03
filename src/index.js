import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counter from './reducers/index'
import List from './components/list'

// const createStore = (reducer) => {

//   let state;
//   let listeners = [];

//   const getState = () => state
  
//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listener);
//     }
//   }
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach(listener => listener())

//   }

//   dispatch({});

//   return { getState, subscribe, dispatch }

// }

const store = createStore(counter)

const renderList = () =>{
  render(
    <List value={store.getState()}
          onIncrement={() => store.dispatch({type: 'INCREMENT'})}
          onDecrement={() => store.dispatch({type: 'DECREMENT'})} />,
    document.getElementById('root')
  )
}

store.subscribe(renderList);
renderList();

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

