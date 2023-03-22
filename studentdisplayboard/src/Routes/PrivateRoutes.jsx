import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivtaeRoutes = () => {
  const token = useSelector((state) => state.login.token);
  return token ? <Outlet /> : <Navigate to={"/login"} />;
};
