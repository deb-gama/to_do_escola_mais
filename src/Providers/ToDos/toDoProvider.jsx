import { createContext } from "react";
import { useState } from "react";
export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [toDos, setToDos] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <ToDoContext.Provider value={{ toDos, setToDos, setOpen, open }}>
      {children}
    </ToDoContext.Provider>
  );
};
