import React, { useState } from "react";

import { FiXCircle, FiEdit2 } from "react-icons/fi";

const todoLists = [
  {
    id: 1,
    task: "coding",
  },
  {
    id: 2,
    task: "reading",
  },
  {
    id: 3,
    task: "writing",
  },
  {
    id: 4,
    task: "watching task",
  },
  {
    id: 5,
    task: "review",
  },
];
const App = () => {
  let [todoList, setTodoList] = useState(todoLists);

  let [todoInput, setTodoInput] = useState("");
  let [todoEdit, setTodoEdit] = useState(null);
  let [todoEditValue, setTodoEditValue] = useState(null);

  console.log("todoEdit", todoEdit);

  const handleSubmit = () => {
    setTodoList([...todoList, { id: ++todoList.length, task: todoInput }]);
  };

  const handleDelete = (d) => {
    console.log("Click", d);

    const removedArray = todoList.filter((e) => e.id !== d);
    setTodoList(removedArray);
  };

  const handleEdit = (d) => {
    setTodoEdit(d.id);
    setTodoEditValue(d.task);
  };

  const handleEditSubmit = (d) => {
    let editA = todoList.map((todo) =>
      todo.id === d ? { id: d, task: todoEditValue } : todo
    );
    setTodoList(editA);

    setTodoEdit(null);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />{" "}
        <button onClick={handleSubmit}>Add Todo</button>
      </div>
      {todoList.map((r, i) => (
        <div style={{ display: "flex", alignItems: "center" }} key={i}>
          {r.id === todoEdit ? (
            <div>
              <input
                type="text"
                value={todoEditValue}
                onChange={(e) => {
                  setTodoEditValue(e.target.value);
                }}
              />{" "}
              <button onClick={() => handleEditSubmit(r.id)}>Edit Todo</button>
              <FiXCircle
                style={{ marginLeft: "10px", color: "red" }}
                onClick={() => setTodoEdit(null)}
              />
            </div>
          ) : (
            <p>{r.task}</p>
          )}

          {r.id !== todoEdit && (
            <>
              <FiXCircle
                style={{ marginLeft: "10px", color: "red" }}
                onClick={() => handleDelete(r.id)}
              />
              <FiEdit2
                style={{ marginLeft: "5px", color: "green" }}
                onClick={() => handleEdit(r)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
