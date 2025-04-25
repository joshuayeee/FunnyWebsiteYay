import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (editIndex != null) {
      const updateTasks = tasks.map((tasks, id) =>
        id === editIndex ? input : tasks
      );
      setTasks(updateTasks);
      setInput("");
      setEditIndex(null);
    } else {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(tasks[index]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterTasks = tasks.filter((task) => task.includes(searchTerm));
  return (
    <div className="App">
      <input value={input} onChange={(e) => handleChange(e)} />
      <input value={searchTerm} onChange={(e) => handleSearch(e)} />
      <button onClick={handleSubmit}>Submit</button>
      {filterTasks.map((tasks, index) => (
        <div key={index}>
          <p>{tasks}</p>
          <button
            onClick={() => {
              handleEdit(index);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
