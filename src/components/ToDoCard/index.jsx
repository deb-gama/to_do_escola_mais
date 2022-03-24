import { TodoCardContainer } from "./styles";
import { InputCheck } from "../InputCheck";
import { Modal } from "../Modal";

export const ToDoCard = ({ toDos, handleOk, setModalOpen, modalOpen }) => {
  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {toDos.map((toDo) => (
        <TodoCardContainer key={toDo.id}>
          <h2>{toDo.title}</h2>
          <InputCheck toDo={toDo} handleOk={() => handleOk(toDo.id)} />
        </TodoCardContainer>
      ))}
      {modalOpen && <Modal onClose={onClose} />}
    </>
  );
};
