import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions/todo';

const getVisibleItems = (todos, filter) => {

  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter((item)=>item.completed);
    case 'SHOW_PENDING':
      return todos.filter((item)=>!item.completed);
    default:
      return todos;
  }

};

const Todo = ({
  text,
  completed,
  onClick
}) => (
    <li onClick={onClick}
        style={{
          textDecoration:
            completed ?
              'line-through':
              'none'}}>
    {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
}) => (
    <ul>
      {todos.map(item => 
        <Todo key={item.id}
              {...item}
              onClick={()=>onTodoClick(item.id)}
            />
      )}
    </ul>
);

const mapStateToProps = (state) => ({
  todos: getVisibleItems(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id){
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


// class VisibleTodoList extends React.Component {

//   componentDidMount(){
//     const {store} = this.context;
//     this.unsubscribe = store.subscribe(()=>
//       this.forceUpdate()
//     );
//   }
//   componentWillUnmount(){
//     this.unsubscribe();
//   }

//   render(){
//     const {store} = this.context;
//     const state = store.getState();
//     return (
//       <TodoList todos={getVisibleItems(state.todos, state.visibilityFilter)}
//                 onTodoClick={(id)=>
//                     store.dispatch({
//                       type: 'TOGGLE_TODO',
//                       id: id
//                     })
//                   }/>
//     );
//   }

// }

// VisibleTodoList.contextTypes = {
//   store: React.PropTypes.object
// };

export default VisibleTodoList;