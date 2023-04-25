import { createContext, useState } from "react";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(true);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
