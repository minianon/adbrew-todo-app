import './App.css';
import { useEffect, useState } from "react";

export function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/todos/")
      .then(res => res.json())
      .then(data => {
        setTodos(data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/todos/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ text: todo })
    })
    .then(res => res.json())
    .then(data => {
      setTodos([...todos, data]);   
      setTodo("");                
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <div>
        <h1>List of TODOs</h1>
        {todos.map((item) => (
          <li key={item._id}>{item.text}</li>
        ))}
      </div>

      <div>
        <h1>Create a ToDo</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="todo">ToDo: </label>
            <input 
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "5px" }}>
            <button>Add ToDo!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
