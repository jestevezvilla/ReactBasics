import {v4} from 'node-uuid';

import { getIsFetchingItems, getIsError } from '../reducers';
import * as api from '../api';

const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter,
});

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
});

export const fetchTodos = (filter) => (dispatch, getState) => {

  if(getIsFetchingItems(getState(), filter)){
    return Promise.resolve();
  }

  dispatch(requestTodos(filter));
  api.fetchTodos(filter)
    .then(response => dispatch(receiveTodos(filter, response)),
          error => dispatch({type: 'REQUEST_TODOS_FAILURE', filter, error: error.message})
    );
};

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text
});