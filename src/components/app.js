import React from 'react';

class APP extends React.Component {
  constructor(store, todos){
    super();
  };
  render(){
    this.store=this.props.store;
    this.todos=this.props.store.getState().todos;
    return (
      <div>
        <input ref={(node) => this.input=node} />
        <button onClick={() =>{
            this.store.dispatch(
              {
                type: 'ADD_TODO',
                text: this.input.value
            });
            this.input.value='';
            this.input.focus();
        }
        }>Add task</button>
        <ul>
          {this.todos.map(item => 
            <li key={item.id}
                onClick={()=>
                  this.store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: item.id
                  })
                }
                style={{textDecoration: item.completed ? 'line-through': 'none'}}
              >{item.id} - {item.text}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default APP;

