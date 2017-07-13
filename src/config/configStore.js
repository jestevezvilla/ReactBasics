import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import todosApp from '../reducers/todo';
import { loadState, saveState } from '../localStorage';

const configStore = () => {
  const persistData = loadState();
  const store = createStore(todosApp, persistData);

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));

  return store;

};

export default configStore;