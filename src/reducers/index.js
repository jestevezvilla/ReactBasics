const initialState = {
  counter: 0,
  clicks: 0
}
const counter = (state = initialState, action) => {
  
  switch (action.type) {
    case 'INCREMENT':
      return state = {
        counter: state.counter + 1,
        clicks: state.clicks + 1
      }
    case 'DECREMENT':
      return state = {
        counter: state.counter - 1,
        clicks: state.clicks + 1
      }
    default:
      return state
  }
}

export default counter