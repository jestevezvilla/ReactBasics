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

export default todo;