import { TodoCardContainer } from "./styles";

export const ToDoCard = ({ toDos }) => {
  return toDos.map((toDo) => (
    <TodoCardContainer key={toDo.id}>
      <h2>{toDo.title}</h2>
      {toDo.completed ? <span>OK</span> : <span>TO DO</span>}
      <button>New</button>
      <button>Delete</button>
    </TodoCardContainer>
  ));
};
