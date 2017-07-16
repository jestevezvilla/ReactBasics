import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import todosApp from '../reducers/index';



const configStore = () => {
  
  const middlewares = [thunk];
  
  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(createLogger());
  }
  
  const store = createStore(todosApp, applyMiddleware(...middlewares));

  return store;

};

export default configStore;