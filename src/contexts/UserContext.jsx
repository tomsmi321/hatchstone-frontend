import React, {  createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import axios from "../config/axiosConfig";
import { useHistory } from "react-router-dom";


export const UserContext = createContext({});

// Anything in here should only relate to the currentUser
const UserContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [currentUserProfile, setCurrentUserProfile] = useState({});
  const history = useHistory()


  // const userId = currentUser._id

  // we can not do an async call directly in useEffect so we need a function
  const getProfile = async userId => {
    try {
      console.log("in get profile");
      const result = await axios.get(`profiles/findByUser/${userId}`);
      console.log(result.data[0]);
      if (result.data) {
        setCurrentUserProfile(result.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateProfile = async ( userId, firstName, lastName, profileImage ) => {
    try {
      const response = await axios.put(`http://localhost:5000/profiles/updateByUser/${userId}`, {
        firstName,
        lastName,
        profileImage
      })
      console.log(response.data)
      setCurrentUserProfile(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  
//   userId will be undefined first time, handle this and monitor for change in currentUser
useEffect(() => {
  console.log('in useEffect - UserContext');
  if(currentUser && Object.keys(currentUser).length) {
      getProfile(currentUser._id);
  }
  console.log(`currentUserProfile \n`, currentUserProfile);
}, [currentUser])

  return (
    <UserContext.Provider
      value={{
        currentUserProfile: currentUserProfile,
        updateProfile: updateProfile
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
