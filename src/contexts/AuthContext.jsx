import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState({})
  const [ currentUserProfile, setCurrentUserProfile ] = useState({})
  const history = useHistory()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(`in useEffect() currentUser - email: ${currentUser.email} ID: ${currentUser._id}, isAuthenticated: ${isAuthenticated}`);
    console.log(`current user's profile: ${currentUserProfile}`, currentUserProfile)
  })

  const loginUser = async (email, password) => {
    console.log(`in AuthContext loginUser function`)
    try {
        const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password
      })
      console.log(response.data)
      const user = response.data.user
      const token = response.data.token
      if (user) {
        setIsAuthenticated(true)
        setCurrentUser({
          _id: user._id,
          email: user.email,
          token: user.token
        })
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
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
    setIsAuthenticated(false)
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
      console.log(response.data)
      const token = response.data.token
      const user = response.data.user
      if (token) {
        setIsAuthenticated(true)
        setCurrentUser({
          _id: user._id,
          email: user.email,
          token
        })
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
        history.push(`/create-profile`)
        return true;
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <AuthContext.Provider value={{isAuthenticated, currentUser, loginUser, logout, createAccount, currentUserProfile, setCurrentUserProfile }}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContextProvider;