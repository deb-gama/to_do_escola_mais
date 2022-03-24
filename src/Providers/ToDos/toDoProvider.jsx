import { createContext } from "react";
import { useState } from "react";
import api from "../../../src/services/api.js";

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [toDos, setToDos] = useState([]);
  const [open, setOpen] = useState(false);

  const createToDo = (userId, newToDo) => {
    api
      .post("https://jsonplaceholder.typicode.com/todos", {
        body: JSON.stringify({
          title: newToDo,
          body: "bar",
          userId: userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <ToDoContext.Provider
      value={{ toDos, setToDos, setOpen, open, createToDo }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
