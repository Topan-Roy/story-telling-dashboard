import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useContext(AuthContext)!;

  if (loading) {
    return <div>Checking session...</div>;
  }

  // login নাই
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // login আছে কিন্তু normal user
  if (user.role === "user") {
    return <Navigate to="/not-authorized" replace />;
  }

  return children;
}
