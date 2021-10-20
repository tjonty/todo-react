import React, {useState, useEffect} from 'react';
// Import Styles
import './App.css';
// Importing Componenets
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import Sidebar from './Components/Sidebar';

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    function filteredData() {
      switch (status) {
        case "Completed":
          setFilteredTodo(todos.filter(todo => todo.completed === true))
          break;
        case "Uncompleted":
          setFilteredTodo(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodo(todos)
      }
    }

    function setLocalStorage() {
      localStorage.setItem("todo", JSON.stringify(todos));
    }
    filteredData();
    setLocalStorage();
  }, [todos, status]);

  function getLocalStorage() {
    if(localStorage.getItem("todo") === null){
      localStorage.setItem("todo", JSON.stringify([]));
    } else{
      const todo = JSON.parse(localStorage.getItem("todo"));
      setTodos(todo)
    }
  }

  return (
    <div className="App">
    <h1>Todos'</h1>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <Sidebar status={status} setStatus={setStatus} />
      <TodoList filteredTodo={filteredTodo} setTodo={setTodos}/>
    </div>
  );
}
