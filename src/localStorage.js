export const loadState = () => {
  try {
    const serializeState = localStorage.getItem('state');
    if(serializeState === null){
      return undefined;
    }
    return JSON.parse(serializeState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    return localStorage.setItem('state', JSON.stringify(state));
  } catch (error) {
    return state;
  }
};