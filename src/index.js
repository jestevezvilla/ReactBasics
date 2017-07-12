import React from 'react';
import ReactDOM from 'react-dom';
import APP from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todosApp from './reducers/todo';

  const persistData = {todos:[{id:99, text: 'Nuevo', completed: false}]};

  ReactDOM.render(
    <Provider store ={createStore(todosApp, persistData)}>
      <APP />
    </Provider>,
    document.getElementById('root')
  );