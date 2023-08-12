import { GoogleAuthProvider, getAuth,signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null); // Create a context object

const auth = getAuth(app); // Get the auth service for the app

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };

  const authInfo = {
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
