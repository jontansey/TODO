import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useFirebase } from "react-redux-firebase";
import * as fb from "firebase/app";

export const Login: React.FC = () => {
  const firebase = useFirebase();

  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={{
          signInFlow: "popup",
          signInSuccessUrl: "/",
          signInOptions: [
            fb.auth.GoogleAuthProvider.PROVIDER_ID,
            fb.auth.EmailAuthProvider.PROVIDER_ID
          ]
        }}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
};
