import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Slices/ToDoSlice';

function NewTodo() {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim() === '') return;

    dispatch(addTodo({ content }));
    setContent('');
  };

  // Add some sample todos
  /*const initialTodos = [
    { id: 1, content: 'wake up', completed: false },
    { id: 2, content: 'cook', completed: false },
    { id: 3, content: 'eat', completed: false },
  ];

  // Add initial todos to the state
  useEffect(() => {
    initialTodos.forEach((todo) => {
      dispatch(addTodo({
        id: todo.id,
        content: todo.content,
        completed: todo.completed,
      }));
    });
  }, []);
*/
  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter a new todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodo;
