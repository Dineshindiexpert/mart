import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  // check the user authentication status from localStorage
  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  return  user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedLayout;