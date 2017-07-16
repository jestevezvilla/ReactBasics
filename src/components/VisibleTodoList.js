import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/todo';
import { getVisibleItems, getIsFetchingItems } from '../reducers';

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
    const { fetchTodos, requestTodos, filter } = this.props;
    requestTodos(filter);
    fetchTodos(filter);
  }

  render(){
    const {toggleTodo, todos, isFetching} = this.props;
    
    if(isFetching && !todos.length){
      return (<p>Loading...</p>);
    }
    return(<TodoList
              todos={todos}
              onTodoClick={toggleTodo}
            />);
  }
}

const mapStateToProps = (state, {match}) => {
  const filter = match.params.filter || 'all';;
  return {
    filter, 
    todos: getVisibleItems(state, filter),
    isFetching: getIsFetchingItems(state, filter),
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