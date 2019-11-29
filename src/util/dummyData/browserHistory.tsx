import { createBrowserHistory } from "history";

export const browserHistory = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
