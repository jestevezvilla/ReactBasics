import {v4} from 'node-uuid';

const DB = [
  {id: v4(),
  text: 'Hola',
  completed: false},
  {id: v4(),
  text: 'Hola 342342',
  completed: true},
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (visibility) => {

  return delay(1000).then(()=>{

    switch (visibility) {
      case 'completed':
        return DB.filter( item => item.completed);    
      case 'active':
        return DB.filter( item => !item.completed);    
      default:
        return DB;
    }
    
  });

};

export const addTodo = (text) => {

  return delay(1000).then(()=>{

    const todo = {
      id: v4(),
      text,
      completed: false,
    };

    DB.push(todo);

    return todo;
    
  });

};

export const toggleTodo = (id) => {

  

  return delay(1000).then(()=>{
    
    const newTodo = DB.find((todo) => todo.id === id);
    newTodo.completed = !newTodo.completed;
    
    return newTodo;

    
  });

};