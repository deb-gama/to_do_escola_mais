import { Route, Switch } from "react-router-dom";
import { Home } from "../Pages/Home";
import { UserPage } from "../Pages/User";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/:user_id">
        <UserPage />
      </Route>
    </Switch>
  );
};
