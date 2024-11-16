import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type CheckAuthProps = {
  isAuthenticated: boolean;
  user: any;
  children: any;
};

const CheckAuthWrapper = ({ isAuthenticated, user, children }: CheckAuthProps) => {
  const location = useLocation();

  if (
    !isAuthenticated &&
    location.pathname !== "/login" &&
    location.pathname !== "/register"
  ) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated && (location.pathname === "/login" || location.pathname === "/register")) {
    
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default CheckAuthWrapper;
