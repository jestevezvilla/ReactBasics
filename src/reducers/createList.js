import {
  combineReducers
} from 'redux';

const createList = (filter) => {

  const toggleHandle = (state, action) => {
    
    const { result: toggledId, entities } = action.response;
    const { completed } = entities.todos[toggledId];

    const shouldRemove = (
      (completed && filter === 'active') ||
      (!completed && filter === 'completed')
    );
    return shouldRemove ?
      state.filter(id => id !== toggledId) :
      state;
  };

  const ids = (state = [], action) => {
    switch (action.type) {
      case 'RECEIVE_TODOS':
        return action.filter === filter ?
          action.response.result :
          state;
      case 'ADD_TODO':

        return filter !== 'completed' ? [...state, action.response.result] :
          state;
      case 'TOGGLE_TODO':
        return toggleHandle(state, action);

      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state; //Prevent extra proccesing
    }
    return action.type === 'REQUEST_TODOS';
  };

  const isError = (state = false, action) => {
    if (action.filter !== filter) {
      return state; //Prevent extra proccesing
    }
    return action.type === 'REQUEST_TODOS_FAILURE' ? action.error : '';
  };

  return combineReducers({
    ids,
    isFetching,
    isError
  });

};
export default createList;

export const getList = (state) => state.ids;

export const getIsFetching = (state) => state.isFetching;

export const getIsError = (state) => state.isError;