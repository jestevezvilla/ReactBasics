const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':

            return (state.id === action.id) ? { ...state,
                    completed: !state.completed
                } :
                state;



        default:
            return state;
    }
};

const todos = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':

            return [...state, todo(null, action)];

        case 'TOGGLE_TODO':

            return state.map(item => todo(item, action));

        default:
            return state;
    }
};

export default todos;