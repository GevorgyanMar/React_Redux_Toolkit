import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PathRouteProps } from "react-router-dom";

type PrivateRouteProps = PathRouteProps & {
  element: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
  // const isAuthenticated = useSelector(selectIsLoggedIn);
  const authDataString = localStorage.getItem("authData");
  const authData = authDataString ? JSON.parse(authDataString) : null;

  const isAuthenticated = authData && authData.id;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
