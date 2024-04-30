import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const useAuth = () => {
  const [user, setUser] = React.useState(null);
  const [authLoading, setAuthLoading] = React.useState(false);

  const location = useLocation();
  const history = useNavigate();

  const redirect = useCallback(() => {
    const { state } = location;
    state?.from ? history(state?.from?.pathname) : history("/");
  }, [history, location]);

  const login = (payload) => {
    try {
      setAuthLoading(true);
      axios
        .post(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/login`, payload, {
          withCredentials: true,
        })
        .then((res) => {
          checkProfile();
        })
        .catch((err) => {
          alert(err.response.data.errors);
        }).finally(() => {
          setAuthLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const register = (payload) => {
    try {
      setAuthLoading(true);
      axios
        .post(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/register`, payload, {
          withCredentials: true,
        })
        .then((res) => {
          checkProfile();
        })
        .catch((err) => {
          alert(err.response.data.errors);
        }).finally(() => {
          setAuthLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    axios
      .get(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        redirect("/login");
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkProfile = () => {
    try {
      axios
        .get(`${import.meta.env.VITE_APP_BACKEND_URL}/auth/profile`, {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        }).finally(() => {
          setAuthLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkProfile();
  }, []);

  useEffect(() => {
    user && (location?.pathname === "/login" || location?.pathname === "/register") && redirect();
  }, [user, location, redirect]);

  return {
    user,
    setUser,
    register,
    authLoading,
    login,
    checkProfile,
    logout,
  };
};

export default useAuth;
