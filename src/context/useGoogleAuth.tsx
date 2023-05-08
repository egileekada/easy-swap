import React from "react";
import { useGoogleLogin } from "react-use-googlelogin";

const GoogleAuthContext = React.createContext({} as any);

export const GoogleAuthProvider = (props: any) => {
  const googleAuth = useGoogleLogin({
    //clientId: process.env.GOOGLE_CLIENT_ID, // Your clientID from Google.
    clientId:
      "802643163548-8um3vi6jea67go2j5kib1bt7l5ji0mv4.apps.googleusercontent.com" // Your clientID from Google.
  });
   
  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {props.children}
    </GoogleAuthContext.Provider>
  );
};

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);
