import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import { BiLogoMongodb } from "react-icons/bi";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setuser]= useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    // create user with google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        
        return signInWithPopup(auth, googleProvider);
    };
    const signIn = (email, password)=>{
        setLoading(true);
        
        return signInWithEmailAndPassword(auth, email, password);
        
    };
    const logOut = ()=>{
        setLoading(true);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'You are Logged Out',
            showConfirmButton: false,
            timer: 1500
          })
        return signOut(auth);
    };
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setuser(currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe()
        }
    },[]);
    // to get all user info from the Mongodb 

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;