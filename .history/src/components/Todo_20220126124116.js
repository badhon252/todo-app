import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/style.css";
export default function Todo() {
  return (
    <div className="main-div">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          name=""
          id="input-box"
          placeholder="Type your todo here!"
        />
        <button className="add-btn">Add</button>
        {/* <FontAwesomeIcon icon="fa-regular fa-circle-plus" /> */}
      </div>
    </div>
  );
}
