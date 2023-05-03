import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import { firebaseAuth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
export default function AuthProvider(props) {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
}
