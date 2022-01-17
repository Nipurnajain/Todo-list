import React from "react";

export default function ({ todo, onDelete }) {
  
  return (
    <div>
      <h4>
        &#10025; {todo.title}
      </h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => {
          onDelete(todo);
        }}
      >
        &#128465;
      </button>
    </div>
  );
}
