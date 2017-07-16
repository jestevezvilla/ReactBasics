import { combineReducers } from 'redux';

import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter =
  combineReducers({
    all: createList('all'),
    active: createList('active'),
    completed: createList('completed')
  });

const todos =
  combineReducers({
    byId,
    listByFilter
});

export default todos;

export const getVisibleItems = (state, filter) => {

  const ids = fromList.getList(state.listByFilter, filter);
  const todos = ids.map(id => fromById.getTodo(state.byId, id));

  return todos;

};