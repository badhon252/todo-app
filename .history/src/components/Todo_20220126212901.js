import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import "../Styles/style.css";

const getLocalData = () => {
  const lists = localStorage.getItem("myTodoLists");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputItems, setInputItems] = useState("");
  const [todo, setTodo] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  //   Adding Items ============
  const addItems = () => {
    if (!inputItems) {
      alert("Your input field is blank!!");
    } else if (inputItems && toggleButton) {
      setTodo(
        todo.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputItems };
          }
          return curElem;
        })
      );
      setInputItems([]);
      setIsEditItem(index);
      setToggleButton(true);
    } else {
      const myNewInput = {
        id: new Date().getTime().toString(),
        name: inputItems,
      };
      setTodo((e) => [...todo, myNewInput]);
      setInputItems("");
    }
  };

  //   edite items =======
  const editItem = (index) => {
    const itemTodoEdited = todo.find((curElem) => {
      return curElem.id === index;
    });
    setInputItems(itemTodoEdited);
    setIsEditItem(index);
    setToggleButton(true);
  };

  //   Deleting items ==========

  const handleDelete = (index) => {
    const updateItems = todo.filter((current) => {
      return current.id !== index;
    });
    setTodo(updateItems);
  };

  useEffect(() => {
    localStorage.setItem("myTodoLists", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="main-div">
      <h1>Todo List</h1>
      <div className="inputs">
        <input
          type="text"
          name=""
          id="input-box"
          placeholder="Type your todo here!"
          value={inputItems}
          onChange={(e) => setInputItems(e.target.value)}
        />
        {toggleButton ? (
          <FontAwesomeIcon
            icon={faEdit}
            className="add-btn"
            onClick={addItems}
          />
        ) : (
          <FontAwesomeIcon
            icon={faPlus}
            className="add-btn"
            onClick={addItems}
          />
        )}

        {/* <button type="submit" className="add-btn" onClick={addItems}>
          Add
        </button> */}
      </div>
      {/* showing items =============== */}
      <div className="show-items">
        {todo.map((currentItems) => {
          return (
            <div key={currentItems.id}>
              <li className="todo-item">
                {currentItems.name}
                <FontAwesomeIcon
                  icon={faEdit}
                  className="icon edit"
                  onClick={() => editItem(currentItems.id)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="icon delete"
                  onClick={() => handleDelete(currentItems.id)}
                />
              </li>
            </div>
          );
        })}
        <input
          type="button"
          value="Delete All"
          className="delete-all"
          onClick={() => setTodo([])}
        />
      </div>
    </div>
  );
};

export default Todo;
