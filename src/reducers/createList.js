import { combineReducers } from 'redux';

const createList = (filter) => {


  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state; //Prevent extra proccesing
    }
    switch (action.type) {
      case 'RECEIVE_TODOS':
        return action.response.map(todo => todo.id);
      default:
        return state;
    }
  };

  const isFetching = (state=false, action) => {
    if (action.filter !== filter) {
      return state; //Prevent extra proccesing
    }
    return action.type === 'REQUEST_TODOS';
  };

  return combineReducers({ids, isFetching});
  
};
export default createList;

export const getList = (state) => state.ids;

export const getIsFetching = (state) => state.isFetching;