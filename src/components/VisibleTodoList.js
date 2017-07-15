import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/todo';
import { getVisibleItems } from '../reducers';

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

class VisibleTodoList extends React.Component {
  
  componentDidMount(){
    this.fetchData();
  }

  componentDidUpdate(prevProps){
    if(this.props.filter !== prevProps.filter){
      this.fetchData();
    }
  }

  fetchData(){
    const { fetchTodos, filter } = this.props;
    fetchTodos(filter);
  }

  render(){
    const {toggleTodo, ...rest} = this.props;
    return(<TodoList
              {...rest}
              onTodoClick={toggleTodo}
            />);
  }
}

const mapStateToProps = (state, {match}) => {
  const filter = match.params.filter || 'all';;
  return {
    filter, 
    todos: getVisibleItems(state, filter)
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick(id){
//     dispatch(toggleTodo(id));
//   }
// });

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
  //{onTodoClick: toggleTodo, receiveTodos}
)(VisibleTodoList));


export default VisibleTodoList;