import React from 'react';
import {connect} from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    todos: getVisibleItems(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id)=>{
      dispatch({
        type: 'TOGGLE_TODO',
        id: id
      });
    }
  };
};

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

class FilterLink extends React.Component {

  /** Esto no hace falta porque le estamos pasando la store por props */
  componentDidMount(){
    const {store} = this.context;
    this.unsubscribe = store.subscribe(()=>
      this.forceUpdate()
    );
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  /** TODO: Analizar esto */

  render(){
    const {store} = this.context;
    const state = store.getState();
    const props = this.props;
    
    return (
      <Link active={props.filter === state.visibilityFilter}
            onClick={ () =>
                  store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                  })
                }>
        {props.children}
      </Link>
    );
  }
}

FilterLink.contextTypes = {
  store: React.PropTypes.object
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

let AddTodo = ({dispatch}) => {
  let input;
  return(
    <div>
      <input ref={(node) => input=node} />
      <button onClick={() =>
                    {dispatch({
                      type: 'ADD_TODO',
                      text: input.value
                    });
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

