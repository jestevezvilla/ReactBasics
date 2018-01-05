import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose, map, pipe } from "ramda";
import * as actions from "../actions/todo";
import { getVisibleItems, getIsFetchingItems, getIsError } from "../reducers";
import ErrorMsg from "./ErrorMsg";

const Todo = ({ todo, toggleTodo }) => (
  <li
    key={todo.id}
    onClick={() => toggleTodo(todo.id)}
    style={{
      textDecoration: todo.completed ? "line-through" : "none"
    }}
  >
    {todo.text}
  </li>
);

const List = todos => <ul>{todos}</ul>;

const mapItems = ({ todos, toggleTodo }) =>
  map(todo => Todo({ todo, toggleTodo }), todos);

const TodoList = pipe(
  props => ({ todos: props.todos, toggleTodo: props.toggleTodo }),
  compose(List, mapItems)
);

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { fetchTodos, filter } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { todos, isFetching, message } = this.props;

    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }

    if (message && !todos.length) {
      return <ErrorMsg msg={message} onRetry={() => this.fetchData()} />;
    }

    return TodoList(this.props);
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || "all";
  return {
    filter,
    todos: getVisibleItems(state, filter),
    isFetching: getIsFetchingItems(state, filter),
    message: getIsError(state, filter)
  };
};

VisibleTodoList = withRouter(
  connect(mapStateToProps, actions)(VisibleTodoList)
);

export default VisibleTodoList;
