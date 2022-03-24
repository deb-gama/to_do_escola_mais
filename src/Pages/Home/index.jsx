import { useContext, useEffect, useState } from "react";
import { UserList } from "../../components/UserList";
import { UserContext } from "../../Providers/User/userProvider";
import api from "../../services/api";

export const Home = () => {
  const { users, setUsers } = useContext(UserContext);

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
