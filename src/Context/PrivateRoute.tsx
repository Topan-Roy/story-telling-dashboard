import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useContext(AuthContext)!;

  // 🔴 এখানেই bug fix
  if (loading) {
    return <div>Checking session...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
