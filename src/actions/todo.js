import {
  normalize
} from 'normalizr';

import {
  getIsFetchingItems,
  getIsError
} from '../reducers';
import * as api from '../api';
import * as schema from '../api/schema';

export const fetchTodos = (filter) => (dispatch, getState) => {

  if (getIsFetchingItems(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'REQUEST_TODOS',
    filter,
  });

  api.fetchTodos(filter)
    .then(
      response =>
        dispatch({
          type: 'RECEIVE_TODOS',
          filter,
          response: normalize(response, schema.arrayOfTodos)
        }),
      error =>
        dispatch({
          type: 'REQUEST_TODOS_FAILURE',
          filter,
          error: error.message
        })
    );
};

export const toggleTodo = (id) => (dispatch) => (

  api.toggleTodo(id)
  .then(response => 
    dispatch({
      type: 'TOGGLE_TODO',
      toggleId: id,
      response: normalize(response, schema.todo)
    })
  )

);

export const addTodo = (text) => (dispatch) => (

  api.addTodo(text)
  .then(response =>
    dispatch({
      type: 'ADD_TODO',
      response: normalize(response, schema.todo)
    })
  )

);