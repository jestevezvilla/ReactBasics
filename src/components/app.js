import React from 'react';

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

const FilterLink = ({filter, store, current, children}) => {

  if(filter === current){
    return (<span>{children}</span>);
  }
  return (
    <a href='#' onClick={(e)=>{
          e.preventDefault();
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: filter
          });
        }}>
          {children}
    </a>
  );
};

const Todo = ({store, text, completed, onClick}) => (
    <li onClick={onClick}
        style={{
          textDecoration:
            completed ?
              'line-through':
              'none'}}>
    {text}
  </li>
);

const TodoList = ({todos, store, onTodoClick}) => (

    <ul>
      {todos.map(item => 
        <Todo key={item.id}
              {...item}
              store={store}
              onClick={()=>onTodoClick(item.id)}
            />
      )}
    </ul>

);

class APP extends React.Component {
  
  render(){
    const store=this.props.store;
    const todos=this.props.store.getState().todos;
    const visibilityFilter=this.props.store.getState().visibilityFilter;
    return (
      <div>
        <input ref={(node) => this.input=node} />
        <button onClick={() =>{
            store.dispatch(
              {
                type: 'ADD_TODO',
                text: this.input.value
            });
            this.input.value='';
            this.input.focus();
        }
        }>Add task</button>
        
        <TodoList todos={getVisibleItems(todos, visibilityFilter)}
                  store={store}
                  onTodoClick={(id)=>
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: id
                  })}/>

        <FilterLink filter='SHOW_COMPLETED' store={store} current={visibilityFilter}>
          Completed
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_ALL' store={store} current={visibilityFilter}>
          ALL
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_PENDING' store={store} current={visibilityFilter}>
          PENDING
        </FilterLink>

      </div>
    );
  }
}

export default APP;

