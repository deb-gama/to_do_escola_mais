import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Providers/User/userProvider";
import api from "../../services/api";

export const UserPage = () => {
  const params = useParams();
  const [toDos, setToDos] = useState([]);
  const { users } = useContext(UserContext);
  const user = users.find((item) => item.id.toString() === params.user_id);

  useEffect(() => {
    api
      .get(`/todos/?userId=${user.id}`)
      .then((response) => {
        setToDos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Bem vindo {user.name}! Aqui está sua To Do List:</h1>
    </div>
  );
};
