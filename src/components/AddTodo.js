import React from "react";
import { useState } from "react";

export const AddTodo = (props) => {
    const [desc, setDesc] = useState("")
    const [title, setTitle] = useState("")
    const submit=(e)=>{
      e.preventDefault();//prevents reloading of page
      if(!title||!desc){
      alert("Title or description cannot be blank");}
      else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
      }
     
    }
  return (
    <div className="container my-3">
      <form onSubmit={submit}>
        <div class="mb-3">
          <h3>add a todo item</h3>
          <label for="title" class="form-label">
            Add todo title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}//so that we can change the value and the current value becomes the title.
          />
          
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">
            Add todo description
          </label>
          <input
            type="text"
            class="form-control"
            id="desc"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
          />
        </div>
        
        <button type="submit" class="btn btn-success btn-sm">
          Add
        </button>
      </form>
    </div>
  );
};
