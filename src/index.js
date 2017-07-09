import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import todosApp from './reducers/todo';
import APP from './components/app';

const store = createStore(todosApp);

const render = () => {
  
  ReactDOM.render(
    <APP store={store} {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();


