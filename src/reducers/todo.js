import { combineReducers } from 'redux';

const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':

            return (state.id === action.id) ? 
                { ...state, completed: !state.completed } :
                state;

        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':

            return [...state, todo(null, action)];

        case 'TOGGLE_TODO':

            return state.map(item => todo(item, action));

        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

// const todosApp = (state = {}, action) => {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     };
// };

// const combineReducers = (reducers) => {

//     return (state = {}, action) => {

//         return Object.keys(reducers).reduce(
//           (nextState, key) => {
//               console.log(action);
//               nextState[key] = reducers[key](state[key], action);

              
              
//               return nextState;
//           }
//         ,{});
//     };

// };

const todosApp = combineReducers({
    todos,
    visibilityFilter
});

export default todosApp;