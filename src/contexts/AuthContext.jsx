import React, { createContext, Component, useState, useEffect } from 'react';
import axios from 'axios';
​
export const AuthContext = createContext();
​
const AuthContextProvider = ({ children }) => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState({})
​
  useEffect(() => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(`in componentDidMount currentUser: ${currentUser}, isAuthenticated: ${this.state.isAuthenticated}`);
      if (currentUser) {
          setIsAuthenticated({
            isAuthenticated: true
          })
          setCurrentUser({
            currentUser: {
              email: currentUser.email,
              token: currentUser.token
            }
          })
      }
      console.log(`in componentDidMount currentUser: ${this.state.currentUser.email}, isAuthenticated: ${this.state.isAuthenticated}`);
  })
​
  const loginUser = async (email, password) => {
      console.log(`attempting to log in user`)
      try {
          const result = await axios.post('http://localhost:5000/auth/login', {
          email,
          password
        })
        console.log(result.data);
        const currentUser = result.data
        if (currentUser) {
          setIsAuthenticated({
            isAuthenticated: true
          })
          setCurrentUser({
            currentUser: {
              email: currentUser.email,
              token: currentUser.token
            }
          })
          console.log(this.state.currentUser); 
          localStorage.setItem('currentUser', JSON.stringify(currentUser))
          return true;
        }
      } catch(err) {
          console.log(err);
      }  
  }
​
  const logout = async () => {
      console.log('in logout function');
      localStorage.removeItem('currentUser');
      setIsAuthenticated({
          isAuthenticated: false
      })
      setCurrentUser({
        currentUser: {
            email: '',
            token: ''
        }
      })
  }

  return (
    <AuthContext.Provider value={{isAuthenticated, currentUser, loginUser, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
​
export default AuthContextProvider;