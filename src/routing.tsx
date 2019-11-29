import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { history, TAppState } from "./store/store";
import { TodoLists } from "./features/todoLists";
import { Login } from "./features/auth/login";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";

const Routing: React.FC = () => {
  const auth = useSelector(({ firebase }: TAppState) => firebase.auth);

  return window.frameElement ? null : (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="*">
          {!isLoaded(auth) ? (
            <span>Loading...</span>
          ) : isEmpty(auth) ? (
            <Login />
          ) : (
            <TodoLists />
          )}
        </Route>
      </Switch>
    </ConnectedRouter>
  );
};

export default Routing;
