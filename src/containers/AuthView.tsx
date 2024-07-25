
import { Route, Navigate } from 'react-router-dom';

const AuthRoute = (prop: { Component: any }) => {
  const isAuthenticated =  !!localStorage.getItem("token");

  return isAuthenticated ? prop.Component : <Navigate to="/login" />;

};

export default AuthRoute;