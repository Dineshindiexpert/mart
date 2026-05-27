import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
// check the user authentication status from localStorage
  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  return   user ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default AuthLayout;