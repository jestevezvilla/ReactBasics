import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions/todo';

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

const Link =({
  active,
  children,
  onClick
}) => {
  
  if(active){
    return (<span>{children}</span>);
  }
  return (
    <a href='#' onClick={(e) => {
      e.preventDefault();
      onClick();
    }}>
          {children}
    </a>
  );
};

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
    dispatch(actions.toggleTodo(id));
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

const mapStateFilterLinkToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter
});

const mapDispatchFilterLinkToProps = (dispatch, props) => ({
  onClick(){
    dispatch(actions.setVisibilityFilter(props.filter))
  }
});

const FilterLink = connect(
  mapStateFilterLinkToProps,
  mapDispatchFilterLinkToProps
)(Link);

// class FilterLink extends React.Component {
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
//     const props = this.props;
    
//     return (
//       <Link active={props.filter === state.visibilityFilter}
//             onClick={ () =>
//                   store.dispatch({
//                     type: 'SET_VISIBILITY_FILTER',
//                     filter: props.filter
//                   })
//                 }>
//         {props.children}
//       </Link>
//     );
//   }
// }

// FilterLink.contextTypes = {
//   store: React.PropTypes.object
// };

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

let AddTodo = ({dispatch}) => {
  let input;
  return(
    <div>
      <input ref={(node) => input=node} />
      <button onClick={() =>
                    {dispatch(actions.addTodo(input.value));
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

const Footer = () => 
  (
    <div>
      <FilterLink filter='SHOW_COMPLETED' >
          Completed
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_ALL'>
          ALL
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_PENDING'>
          PENDING
        </FilterLink>
    </div>
  );

const APP = () =>
  
    (<div>   
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );

export default APP;

