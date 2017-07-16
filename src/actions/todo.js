import {v4} from 'node-uuid';

import * as api from '../api';

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
});

export const fetchTodos = (filter) => (dispatch) =>
  api.fetchTodos(filter).then((response)=>
    dispatch(receiveTodos(filter, response))
  );

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text
});