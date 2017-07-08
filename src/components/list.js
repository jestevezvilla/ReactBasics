import React from 'react';

const List = ({state, onIncrement, onDecrement}) => {

  return (
    <div>
        <span>{state.counter}</span>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default List;