import React from 'react';
import ReactDOM from 'react-dom';
import APP from './components/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todosApp from './reducers/todo';

  ReactDOM.render(
    <Provider store ={createStore(todosApp)}>
      <APP />
    </Provider>,
    document.getElementById('root')
  );



