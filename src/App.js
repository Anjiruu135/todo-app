import "./App.css";
import { useState,useEffect } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
function App() {
  const [showForm, setShowForm] = useState(false)
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Eat",
    },
    {
      id: 2,
      text: "Sleep",
    },
    {
      id: 3,
      text: "Repeat",
    },
  ]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log(newTodos)
    setTodos(newTodos)
  }

  const addTodo = (text) => {
    const id = todos.length + 1;
    const newTodo = { id, text };
   setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <Header title="To-Do-List App" addTodo = {() => setShowForm(!showForm)} showForm={showForm}/>
      {showForm ? <AddTodo onAdd={addTodo}/>:''}
     {todos.length > 0 ?  <Todos todos={todos} onDelete={deleteTodo} />:<p>Task is empty.</p>}
    </div>
  );
}

export default App;
