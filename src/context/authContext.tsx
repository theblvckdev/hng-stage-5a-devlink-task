import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";
import { account, ID } from "@/lib/appwrite";

interface AuthContextType {
  user: any;
  login: (userData: UserDataProperties) => void;
  signUp: (userData: UserDataProperties) => void;
  logout: () => void;
}

interface UserDataProperties {
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = Cookies.get("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = async (userData: UserDataProperties) => {
    try {
      await account.createEmailPasswordSession(
        userData.email,
        userData.password
      );
      setUser(await account.get());
    } catch (err) {
      console.error(err);
    }
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData.email), { expires: 7 }); // Expires in 7 days
  };

  const signUp = async (userData: UserDataProperties) => {
    try {
      await account.create(ID.unique(), userData.email, userData.password);
      await account.createEmailPasswordSession(
        userData.email,
        userData.password
      );
      setUser(await account.get());
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
