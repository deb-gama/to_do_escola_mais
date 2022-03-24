import { useState } from "react";
import { ModalContainer } from "./styles";
import { useParams } from "react-router-dom";

export const Modal = ({ onClose, setModalOpen }) => {
  const [inputValue, setInputValue] = useState("");
  const params = useParams();

  const createToDo = (newToDo) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: newToDo,
        body: "bar",
        userId: Number(params.user_id),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => onClose());
  };

  return (
    <ModalContainer>
      <span onClick={onClose}>X</span>
      <h1>Create a new To Do</h1>
      <input
        type="text"
        placeholder={"To do..."}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={() => createToDo(inputValue)}>Create</button>
    </ModalContainer>
  );
};
