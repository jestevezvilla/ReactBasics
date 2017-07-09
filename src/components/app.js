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

const FilterLink =({
  filter,
  store,
  current,
  children,
  onClick
}) => {
  
  if(filter === current){
    return (<span>{children}</span>);
  }
  return (
    <a href='#' onClick={(e) => {
      e.preventDefault();
      onClick(filter);
    }}>
          {children}
    </a>
  );
};

const Todo = ({
  store,
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
  store,
  onTodoClick
}) => (
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

const AddTodo = ({
  store,
  onClickAdd,
  children
}) => {
  let inputText;
  return(
    <div>
      <input ref={(node) => inputText=node} />
      <button onClick={() => onClickAdd(inputText)}>{children}</button>
    </div>
  );
};

const Footer = ({
  store,
  current,
  onFilterClick
}) => 
  (
    <div>
      <FilterLink filter='SHOW_COMPLETED' store={store} current={current} onClick={onFilterClick}>
          Completed
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_ALL' store={store} current={current} onClick={onFilterClick}>
          ALL
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_PENDING' store={store} current={current} onClick={onFilterClick}>
          PENDING
        </FilterLink>
    </div>
  );

const APP = ({
  store,
  todos,
  visibilityFilter
}) =>
  
    (<div>   
        <AddTodo store={store}
                 onClickAdd={(input) =>
                    {store.dispatch({
                      type: 'ADD_TODO',
                      text: input.value
                    });
                    input.value='';
                    input.focus();
                  }}>
                  Add task
        </AddTodo>
        
        <TodoList todos={getVisibleItems(todos, visibilityFilter)}
                  store={store}
                  onTodoClick={(id)=>
                    store.dispatch({
                      type: 'TOGGLE_TODO',
                      id: id
                    })
                  }/>

        <Footer store={store}
                current={visibilityFilter}
                onFilterClick={(filter)=>{
                  store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: filter
                  });
                }}/>

      </div>
    );

export default APP;

