import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoList } from "./Style";

const Todos = () => {
  const [addItems, setAddItems] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddItemIntoList = () => {
    setTodos(
      addItems !== ""
        ? todos.concat({
            id: Math.random(),
            value: addItems.trim(),
            completed: false,
          })
        : todos
    );
    setAddItems("");
  };
  const handleDeleteItem = (clickedId) => {
    setTodos(todos.filter(({ id }) => id !== clickedId));
  };
  const handleIsTaskCompleted = (clickedId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === clickedId ? { ...todo, completed: true } : todo
      )
    );
  };
  return (
    <TodoList>
      <div className="heading">To-Do List</div>
      <div className="search">
        <div>
          <input
            className="input search-common"
            placeholder="Add Task"
            type="text"
            value={addItems}
            onChange={(e) => setAddItems(e.target.value)}
          />
        </div>
        <div>
          <button className="btn search-common" onClick={handleAddItemIntoList}>
            Add
          </button>
        </div>
      </div>
      <div className="render-list">
        <ol className="ol">
          {todos.length > 0 ? (
            todos.map(({ id, value, completed }) => {
              return (
                <li key={id}>
                  <input
                    className="btn-common"
                    type="radio"
                    onClick={() => handleIsTaskCompleted(id)}
                  />
                  <span className="span-value"></span>
                  {completed ? <del>{value}</del> : value}

                  <button
                    className="btn-common"
                    onClick={() => handleDeleteItem(id)}
                  >
                    {<MdDeleteOutline />}
                  </button>
                </li>
              );
            })
          ) : (
            <span style={{ margin: 10, padding: 10, fontSize: 20 }}>
              No Item to do
            </span>
          )}
        </ol>
      </div>
    </TodoList>
  );
};

export default Todos;
