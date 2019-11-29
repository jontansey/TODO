import { connectRouter } from "connected-react-router";
import { combineReducers, Reducer } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export const makeRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    firebase: firebaseReducer as Reducer<any>,
    firestore: firestoreReducer as Reducer<any>
  });
