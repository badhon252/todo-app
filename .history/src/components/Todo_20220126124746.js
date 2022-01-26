import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/style.css";

export default function Todo() {
  const [inputItems, setInputItems] = useState("");

  const addItems = () => {};
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
          onChange={setInputItems}
        />
        <button className="add-btn" onClick={addItems}>
          Add
        </button>
        {/* <FontAwesomeIcon icon="fa-regular fa-circle-plus" /> */}
      </div>
    </div>
  );
}
