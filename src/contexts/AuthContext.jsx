import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import axios from './../config/axiosConfig';
=======
// import axios from "../config/axiosConfig";
import axios from '../config/axiosConfig'
>>>>>>> 4f244b8fb739f2b1cb2d80e2a0d9155f278fc84d

export const AuthContext = createContext();

// calling this function as initial value for currentUser solves the initial empty user object bug on page changes/refreshes
const getInitialCurrentUserState = () => {
  let user = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(user);
  if (!user) return {};
  return user;
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getInitialCurrentUserState());
  const [currentUserProfile, setCurrentUserProfile] = useState({});
  const history = useHistory();

  const loginUser = async (email, password) => {
    console.log(`in AuthContext loginUser function`);
    try {
<<<<<<< HEAD
      const response = await axios.post('auth/login', {
=======
      const response = await axios.post("/auth/login", {
>>>>>>> 4f244b8fb739f2b1cb2d80e2a0d9155f278fc84d
        email,
        password
      });
      const user = response.data.user;
      const token = response.data.token;
      if (user) {
        const currentUserData = {
          _id: user._id,
          email: user.email
        };
        setCurrentUser(currentUserData);
        console.log(currentUserData);
        // storing response data into a const first and passing the const to updating state function is to counter a race condition that's happening
<<<<<<< HEAD
        localStorage.setItem("currentUser", JSON.stringify(currentUserData))
        localStorage.setItem("token", JSON.stringify(token))
        history.push(`/conversations/`)
=======
        localStorage.setItem("currentUser", JSON.stringify(currentUserData));
        history.push(`/conversations/${currentUserData._id}`);
>>>>>>> 4f244b8fb739f2b1cb2d80e2a0d9155f278fc84d
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    console.log("in AuthContext logout function");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token")
    setCurrentUser({});
    history.push(`/`);
  };

  const createAccount = async (email, password) => {
    try {
      console.log("in AuthContext createAccount function");
      const response = await axios.post("/auth/register", {
        email,
        password,
        // admin and isActive required to be sent in body for backend validation middleware
        admin: false,
        isActive: true
      });
      const token = response.data.token;
      const user = response.data.user;
      if (token) {
        const currentUserData = {
          _id: user._id,
          email: user.email,
        };
        setCurrentUser(currentUserData);
        // storing response data into a const first and passing the const to updating state function is to counter a race condition that's happening
        localStorage.setItem("currentUser", JSON.stringify(currentUserData));
        localStorage.setItem("token", JSON.stringify(token))
        history.push(`/create-profile`);
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(currentUser);
  return (
    <AuthContext.Provider
      value={{ currentUser, loginUser, logout, createAccount, currentUserProfile, setCurrentUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
