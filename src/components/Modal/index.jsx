import { useState } from "react";
import { ModalContainer } from "./styles";

export const Modal = ({ onClose, createToDo }) => {
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue);
  return (
    <ModalContainer>
      <form>
        <span onClick={onClose}>X</span>
        <h1>Create a new To Do</h1>
        <input
          type="text"
          placeholder={"To do..."}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button>Create</button>
      </form>
    </ModalContainer>
  );
};
