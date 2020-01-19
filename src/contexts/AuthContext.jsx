import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState({})
  const [ currentUserProfile, setCurrentUserProfile ] = useState({})
  const history = useHistory()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(`current user's profile: \n`, currentUserProfile)
    console.log(`currentUser: \n`, user)
    setCurrentUser(user);
  }, [])

  const loginUser = async (email, password) => {
    console.log(`in AuthContext loginUser function`)
    try {
        const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password
      })
      const user = response.data.user
      const token = response.data.token
      if (user) {
        const currentUserData = {
          _id: user._id,
          email: user.email,
          token: token
        }
        setCurrentUser(currentUserData)
        // storing response data into a const first and passing the const to updating state function is to counter a race condition that's happening
        localStorage.setItem('currentUser', JSON.stringify(currentUserData))
        history.push(`/conversations/`)
        return true;
      }
    } catch(err) {
        console.log(err);
    }  
  }

  const logout = async () => {
    console.log('in AuthContext logout function');
    localStorage.removeItem('currentUser');
    setCurrentUser({
        _id: null,
        email: null,
        token: null
    })
    history.push(`/`)
  }

  const createAccount = async (email, password) => {
    try {
      console.log('in AuthContext createAccount function');
      const response = await axios.post('http://localhost:5000/auth/register', {
        email,
        password,
        // admin and isActive required to be sent in body for backend validation middleware
        admin: false,
        isActive: true
      })
      const token = response.data.token
      const user = response.data.user
      if (token) {
        const currentUserData = {
          _id: user._id,
          email: user.email,
          token: token
        }
        setCurrentUser(currentUserData)
        // storing response data into a const first and passing the const to updating state function is to counter a race condition that's happening
        localStorage.setItem('currentUser', JSON.stringify(currentUserData))
        history.push(`/create-profile`)
        return true;
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <AuthContext.Provider value={{currentUser, loginUser, logout, createAccount, currentUserProfile, setCurrentUserProfile }}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContextProvider;