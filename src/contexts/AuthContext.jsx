import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState({})
  const history = useHistory()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(`in useEffect() currentUser - email: ${currentUser.email} password: ${currentUser.password}, isAuthenticated: ${isAuthenticated}`);
    // if (user) {
    //     setIsAuthenticated(true)
    //     setCurrentUser({
  //         email: user.email,
  //         token: user.token
    //     })
    // }
    // console.log(`in useEffect() currentUser: ${currentUser}, isAuthenticated: ${isAuthenticated}`);
  })

  const loginUser = async (email, password) => {
    console.log(`attempting to log in user`)
    try {
        const result = await axios.post('http://localhost:5000/auth/login', {
        email,
        password
      })
      console.log(result.data)
      const user = result.data
      console.log(user)
      if (user) {
        setIsAuthenticated(true)
        setCurrentUser({
          email: user.email,
          token: user.token
        })
        // console.log(isAuthenticated)
        // console.log(currentUser)
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
        email: '',
        token: ''
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
      // This line will need to be changed to response.data.user once backend is also sending user to client
      const user = response.data
      if (token) {
        setIsAuthenticated(true)
        setCurrentUser({
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
  <AuthContext.Provider value={{isAuthenticated, currentUser, loginUser, logout, createAccount}}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContextProvider;