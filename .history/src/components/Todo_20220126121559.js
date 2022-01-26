import React from "react";
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
      </div>
    </div>
  );
}
