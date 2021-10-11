import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut } from "firebase/auth";
import initializeAuthentication from "../FireBase/Firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const signInUseingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
        
    }

    const logout = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } 
          });
    },[])

    return {
        user, 
        signInUseingGoogle,
        logout,
    }
}

export default useFirebase;