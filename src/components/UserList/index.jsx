import { Link } from "react-router-dom";

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};
