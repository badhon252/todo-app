import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../Styles/style.css";

export default function Todo() {
  const [inputItems, setInputItems] = useState("");
  const [todo, setTodo] = useState([]);

  const addItems = () => {
    if (!inputItems) {
      alert("Your input field is blank!!");
    } else {
      setTodo((e) => [...todo, inputItems]);
      setInputItems("");
    }
  };

  return (
    <div className="main-div">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          name=""
          id="input-box"
          placeholder="Type your todo here!"
          value={inputItems}
          onChange={(e) => setInputItems(e.target.value)}
        />

        {/* <button type="submit" className="add-btn" onClick={addItems}>
          Add
        </button> */}
        <FontAwesomeIcon icon={faPlus} className="add-btn" onClick={addItems} />
      </div>
      {/* showing items =============== */}
      <div className="show-items">
        {todo.map((currentItems, index) => {
          return (
            <div key={index}>
              <li className="todo-item">{currentItems}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
}
