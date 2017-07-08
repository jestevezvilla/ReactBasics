const text = (state = '', action) => {
  
  switch (action.type) {
    case 'REMOVE':
      return state = '';
    case 'ADD':
      return state = action.text;
    default:
      return state;
  }
};

export default text;