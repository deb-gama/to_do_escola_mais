import { TodoCardContainer } from "./styles";
import { RiDeleteBin6Fill, RiAddCircleFill } from "react-icons/ri";
import { InputCheck } from "../InputCheck";
import { useState } from "react";
import { Modal } from "../Modal";

export const ToDoCard = ({ toDos, handleOk, createToDo }) => {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(toDos);

  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {toDos.map((toDo) => (
        <TodoCardContainer key={toDo.id}>
          <h2>{toDo.title}</h2>
          <InputCheck toDo={toDo} handleOk={() => handleOk(toDo.id)} />
          <div className="btn-container">
            <button className="btn_create" onClick={() => setModalOpen(true)}>
              <RiAddCircleFill size={25} />
            </button>
          </div>
        </TodoCardContainer>
      ))}
      {modalOpen && <Modal onClose={onClose} setModalOpen={setModalOpen} />}
    </>
  );
};
