import React, { useState } from "react";
// import "./todoapp.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputs] = useState({}); // 👈 keep inputs for sub-lists

  // Add a new heading
  const handleAddTodo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput("");
    }
  };

  // Add a new list under a heading
  const addList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== "") {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInputs[index]); // ✅ use .lists
      setTodos(newTodos);

      // clear the input for that index
      setListInputs({ ...listInputs, [index]: "" });
    }
  };

  // Handle sub-list input change
  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  };

  // Delete a heading
  const deleteHeading = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-app-container">
        <h1 className="title">My app</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => setHeadingInput(e.target.value)}
          />
          <button className="add-list-button" onClick={handleAddTodo}>
            Add Heading
          </button>
        </div>
      </div>

      <div className="todo-main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading-todo">
              <h3>{todo.heading}</h3>
              <button
                className="delete-button-heading"
                onClick={() => deleteHeading(index)}
              >
                Delete Todo
              </button>
            </div>

            {/* show sub-lists */}
            <ul>
              {todo.lists.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>

            {/* input for sub-lists */}
            <div className="add-list">
              <input
                type="text"
                placeholder="Add sub-task"
                value={listInputs[index] || ""}
                onChange={(e) => handleListInputChange(index, e.target.value)}
              />
              <button className="addlistbtn" onClick={() => addList(index)}>
                Add List
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
