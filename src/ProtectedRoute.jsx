import React, { useState, useEffect } from 'react'
import {Redirect, Route} from 'react-router-dom';
import axios from './config/axiosConfig'

const ProtectedRoute = ({ component: Component, ...props }) => ( 
  <Route path={props.path} render={() => {
    return (
      <ProtectedContainer>
        <Component />
      </ProtectedContainer>
    )
  }} />
);

const ProtectedContainer = ({ children }) => {

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const checkToken = async () => {
    console.log('IN CHECK TOKEN')
    const token = localStorage.getItem('token')

    if (token) {
      try {
        console.log('IN TRY', token)
        const result = await axios.get('/auth/checkToken', {
          headers: {
            Authorization: token,
          } 
        }) 
        console.log('RESULT:', result)
        setUser(result)
        setIsLoading(false)
      }
      catch (err) {
        console.log('IN CATCH')
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
    }
  }
  
  useEffect(() => { checkToken() }, [])

  console.log('is loading', isLoading)
  console.log('user', user)

  if (isLoading) {
    console.log('RETURNING NULL')
    return null
  } 
  
  if (!user) {
    return <Redirect to="/log-in" />
  }
  
  return React.cloneElement(children, {user})

}

export default ProtectedRoute