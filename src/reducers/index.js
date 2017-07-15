import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';

const todosApp = combineReducers({
    todos,
});

export default todosApp;

export const getVisibleItems = (state, filter) =>
  fromTodos.getVisibleItems(state.todos, filter);
