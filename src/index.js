import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './config/configStore';
import Root from './components/Root';

const store = configStore();

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );