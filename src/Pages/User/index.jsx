import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToDoCard } from "../../components/ToDoCard";
import { ToDoContext } from "../../Providers/ToDos/toDoProvider";
import { UserContext } from "../../Providers/User/userProvider";
import api from "../../services/api";
import { CardsContainer } from "./styles";
import { useHistory, Link } from "react-router-dom";

export const UserPage = () => {
  const params = useParams();
  const { users } = useContext(UserContext);
  const { toDos, setToDos } = useContext(ToDoContext);
  const user = users.find((item) => item.id.toString() === params.user_id);
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/todos/?userId=${user.id}`)
      .then((response) => {
        setToDos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <CardsContainer>
        <h1>Olá {user.name}! Aqui está sua To Do List:</h1>
        <div className="toDoContainer">
          <ToDoCard toDos={toDos} />
        </div>
        <span>
          <button className="backToHome" onClick={() => history.push("/")}>
            Home
          </button>
        </span>
      </CardsContainer>
    </>
  );
};
