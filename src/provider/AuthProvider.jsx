import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext =createContext(null);

 const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [loading , setLoading] = useState(true);
    const [user, setUser] = useState(null)

    const createRegister =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth ,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
        
    },[])
    const signIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }
  

    const authInfo={
        user,
        createRegister,
        signIn,
        logout,
        setUser,
        loading,
        setLoading

    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;