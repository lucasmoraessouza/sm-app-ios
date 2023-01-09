import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { User } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

interface IAuthContext {
  user?: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email.trim(), password);
  };

  const logout = async () => {
    await signOut(auth);
    console.log("logout");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {/* TODO - Loading component */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
