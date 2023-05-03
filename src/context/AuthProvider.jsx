import { createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext();
export default function AuthProvider(props) {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(false);
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
