import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  let myStyles={
    minHeight:"70vh"
  }
  return (
    <div className="container my-3" style={myStyles}>
      <h3 className="text-center my-3">ToDo List</h3>
      {
        props.todos.length===0?
          <div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">No todos to display</h4>
  <p>to add todo items use the above add todo button</p>
  <hr/>
  <p class="mb-0">Make sure to fill all the fields.</p>
</div>
        :
      
      props.todos.map((todo)=>{
          return ( <>
              <Todo todo={todo} onDelete={props.onDelete} key={todo.sno}/><hr/>
          </>)
          })
          }
    </div>
  );
}
