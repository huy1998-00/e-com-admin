import { Outlet, Navigate } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../context/auth";
const ProtectRoute = () => {
  const { loggedin } = useContext(AuthContext);
  console.log(loggedin);

  return loggedin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;
