export const ToDoCard = ({ toDos }) => {
  return toDos.map((toDo) => (
    <div key={toDo.id}>
      <h1>{toDo.title}</h1>
      {toDo.completed ? <span>OK</span> : <span>TO DO</span>}
    </div>
  ));
};
