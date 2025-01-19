import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verify } from "../apiRequest/api";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    (async () => {
      try {
        let result = await verify();
        if (result) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        setIsLogin(false);
      } finally {
        setLoading(false); // Set loading to false after verification
      }
    })();
  }, []);

  if (loading) {
    return <Loading />; // Show a loading indicator while checking
  }

  return isLogin ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
