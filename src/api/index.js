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

  return delay(1500).then(()=>{
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