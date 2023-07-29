import { createContext, useEffect, useState } from "react";
import { firebaseAuth } from "../firebase";
import { onIdTokenChanged } from "firebase/auth";
export const AuthContext = createContext();
export default function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onIdTokenChanged(firebaseAuth, (user) => {
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
