import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";

import { makeRootReducer } from "../reduxRoot";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const composeEnhancers = composeWithDevTools({});

export const rootReducer = makeRootReducer(history);

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}

export type TAppState = ReturnType<typeof rootReducer>;
