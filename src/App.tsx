import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

import configureStore from "./store/store";
import Routing from "./routing";
import { Header } from "./common/components/header";
import { CustomThemeProvider } from "./themes";
import { ScreenClassProvider } from "react-grid-system";
import fbConfig from "./fbconfig.json";

const store = configureStore();

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

firebase.initializeApp(fbConfig);
firebase.firestore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function App() {
  return (
    <ScreenClassProvider>
      <Provider store={store}>
        <CustomThemeProvider>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <Header />
            <Routing />
          </ReactReduxFirebaseProvider>
        </CustomThemeProvider>
      </Provider>
    </ScreenClassProvider>
  );
}

export default App;
