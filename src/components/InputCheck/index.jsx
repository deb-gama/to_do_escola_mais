import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

export const InputCheck = ({ toDo }) => {
  const [open, setOpen] = useState(true);
  const [check, setCheck] = useState(false);

  const updateStatus = (toDo_id, status) => {
    // setStatus(!status);
    api
      .patch(`https://jsonplaceholder.typicode.com/posts/${toDo_id}`, {
        body: JSON.stringify({
          completed: status,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => console.log(toDo_id, response))
      .catch((error) => console.log(error));
  };

  const handleOk = (toDo_id) => {
    setOpen(!open);
    updateStatus(toDo_id, open);
    toDo.completed = true;
  };

  const handleToDo = (toDo_id) => {
    setCheck(!check);
    updateStatus(toDo_id, check);
    toDo.completed = false;
  };
  return (
    <>
      {toDo.completed ? (
        <label>
          <input
            type="checkbox"
            checked={toDo.completed}
            onChange={() => handleToDo(toDo.id, toDo.completed)}
          />
          OK
        </label>
      ) : (
        <label>
          <input
            type="checkbox"
            checked={toDo.completed}
            onChange={() => handleOk(toDo.id, toDo.completed)}
          />
          TO DO
        </label>
      )}
    </>
  );
};
