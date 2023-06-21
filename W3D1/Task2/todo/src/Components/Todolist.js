import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../Slices/ToDoSlice'
import Todo from './Todo'

function TodoList() {
  const todos = useSelector((state) => state.todos.todosList);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo({ id }));
  };

  const handleDelete = (id) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => <Todo key={todo.id} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} />)}
      </ul>
  );
}

export default TodoList;


