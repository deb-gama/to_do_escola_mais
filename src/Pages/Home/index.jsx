import { useEffect, useState } from "react";
import { UserList } from "../../components/UserList";
import api from "../../services/api";

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};
