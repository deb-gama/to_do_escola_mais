import { TodoCardContainer } from "./styles";
import { RiDeleteBin6Fill, RiAddCircleFill } from "react-icons/ri";
import api from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { ToDoContext } from "../../Providers/ToDos/toDoProvider";
import { InputCheck } from "../InputCheck";

export const ToDoCard = ({ toDos, handleOk }) => {
  // const { id } = useContext(ToDoContext);
  const [completed, setCompleted] = useState(true);

  return toDos.map((toDo) => (
    <TodoCardContainer key={toDo.id}>
      <h2>{toDo.title}</h2>
      <InputCheck toDo={toDo} handleOk={() => handleOk(toDo.id, completed)} />
      <div className="btn-container">
        <button className="btn_create">
          <RiAddCircleFill size={18} />
        </button>
        <button className="btn_delete">
          <RiDeleteBin6Fill size={18} />
        </button>
      </div>
    </TodoCardContainer>
  ));
};
