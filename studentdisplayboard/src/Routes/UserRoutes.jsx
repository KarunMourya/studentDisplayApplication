import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CircularLoader } from "../Components/Loader/CircularLoader";
import { PrivtaeRoutes } from "./PrivateRoutes";

const Login = lazy(() => import("../Components/Login/Login"));
const SignUp = lazy(() => import("../Components/SignUp/SignUp"));
const Dashboard = lazy(() => import("../Components/Dashboard/Dashboard"));
const NotFound = lazy(() => import("../Components/NotFound/NotFound"));

const UserRoutes = () => {
  const location= useLocation();
  return (
    <div >
      <Suspense fallback={<CircularLoader />} >
        <Routes >
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<PrivtaeRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default UserRoutes;
