import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todo';

let AddTodo = ({dispatch}) => {
  let input;
  return(
    <div>
      <input ref={(node) => input=node} />
      <button onClick={() =>
                    {dispatch(addTodo(input.value));
                    input.value='';
                    input.focus();
                  }}>Add todo</button>
    </div>
  );
};
AddTodo = connect(
  // state => {
  //   return {};
  // },
  // dispatch => {
  //   return {dispatch};
  // }
  )(AddTodo);

  export default AddTodo;