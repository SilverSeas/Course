import TodoList from './Components/Todolist';
import NewTodo from './Components/NewTodo';
import './App.css';



function App() {
  return (
    <div>
      <h1>Todo-App</h1>
      <NewTodo/>
      <TodoList />
    </div>
  );
}

export default App;

