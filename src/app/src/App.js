import "./App.css";
import { useEffect, useState } from "react";

export function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTodos = () => {
    setLoading(true);
    fetch("http://localhost:8000/todos/")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch todos");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/todos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: todo }),
    })
      .then(() => {
        fetchTodos();
        setTodo("");
      })
      .catch(() => setError("Failed to create todo"));
  };

  const handleDelete = (id) => {
    fetch("http://localhost:8000/todos/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: id }),
    })
      .then(() => setTodos(todos.filter((t) => t._id !== id)))
      .catch(() => setError("Failed to delete todo"));
  };

  return (
    <div className="App">
      <div>
        <h1>List of TODOs</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {todos.map((item) => (
          <li key={item._id}>
            {item.text}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </li>
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
            <button disabled={!todo.trim()}>Add ToDo!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
