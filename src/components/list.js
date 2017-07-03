import React from 'react'

const List = ({value, onIncrement, onDecrement}) => {

  return (
    <div>
        <span>{value.counter}</span>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
  )
}

export default List