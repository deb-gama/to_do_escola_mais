import { useContext, useEffect, useState } from "react";
import { UserList } from "../../components/UserList";
import { UserContext } from "../../Providers/User/userProvider";
import api from "../../services/api";
import { HomeContainer } from "./styles";

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
    <HomeContainer>
      <h1>ToDo List</h1>
      <h2>Users</h2>
      <UserList users={users} />
    </HomeContainer>
  );
};
