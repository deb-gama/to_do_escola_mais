import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Providers/User/userProvider";
import { ToDoProvider } from "./Providers/ToDos/toDoProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToDoProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ToDoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
