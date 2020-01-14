import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState({})

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      console.log(`in useEffect() currentUser: ${currentUser}, isAuthenticated: ${isAuthenticated}`);
      // if (user) {
      //     setIsAuthenticated(true)
      //     setCurrentUser({
      //       user: {
      //         email: user.email,
      //         token: user.token
      //       }
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
            user: {
              email: user.email,
              token: user.token
            }
          })
          // console.log(isAuthenticated)
          // console.log(currentUser)
          localStorage.setItem('currentUser', JSON.stringify(currentUser))
          return true;
        }
      } catch(err) {
          console.log(err);
      }  
  }

  const logout = async () => {
      console.log('in logout function');
      localStorage.removeItem('currentUser');
      setIsAuthenticated(false)
      setCurrentUser({
        user: {
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

export default AuthContextProvider;