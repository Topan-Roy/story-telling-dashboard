import { createContext, useState, useEffect, ReactNode } from "react";
import { toast } from "react-toastify";
import api from "./api";

interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signin: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Restore user from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      // Decode JWT to get user info without API call
      const payload = JSON.parse(atob(token.split(".")[1]));
      const userData: User = {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        role: payload.role,
      };
      setUser(userData);
    } catch (err) {
      console.log("Invalid token, clearing storage", err);
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const signin = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await api.post("/api/auth/login", { email, password });
      console.log("Login response:", res.data);

      const userData: User = res.data.data.user;
      const accessToken: string = res.data.data.accessToken;
      const refreshToken: string = res.data.data.refreshToken;

      if (!userData || !accessToken) throw new Error("Invalid login response");

      // 🔹 Save tokens first
      localStorage.setItem("authToken", accessToken);
      if (refreshToken) localStorage.setItem("refreshToken", refreshToken);

      // 🔹 Then set user
      setUser(userData);

      toast.success("Login successful!");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        await api.post("/api/auth/logout", { refreshToken });
      }
    } catch (err) {
      console.log("Logout API failed, clearing local session");
    } finally {
      setUser(null);
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      toast.success("Logged out successfully!");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signin, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
