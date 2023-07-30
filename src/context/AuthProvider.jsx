import { createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebase";
import { onIdTokenChanged } from "firebase/auth";
import useFireStore from "../hooks/useFireStore";
export const AuthContext = createContext();
export default function AuthProvider(props) {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const { getUserGroups, userGroups, addUserInDb } = useFireStore();

  useEffect(() => {
    getUserGroups();
  }, []);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(firebaseAuth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (isSigningUp && user && userName) {
      const randomIndex = Math.floor(Math.random() * userGroups?.length);
      localStorage.setItem("userGroupId", userGroups[randomIndex].id);
      addUserInDb(user.uid, userGroups[randomIndex].id, userName)
        .then((res) => {
          setIsSigningUp(false);
        })
        .catch((error) => {
          setIsSigningUp(false);
        });
    }
  }, [isSigningUp, user, userName]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isSigningUp, setIsSigningUp, setUserName }}
    >
      {!loading && props.children}
    </AuthContext.Provider>
  );
}
