//add todocomponents for Todolist
import React from 'react';

const Todo = (props) => {
  const { id, content, completed } = props.todo;
  return (
    <li className={completed ? 'completed' : ''}>
      <input type="checkbox" checked={completed} onChange={() => props.handleToggle(id)} />
      <span>{content}</span>
      <button onClick={() => props.handleDelete(id)}>Delete</button>
    </li>
  );
};

export default Todo;