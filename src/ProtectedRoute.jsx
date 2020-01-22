import React, { useState, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import axios from './config/axiosConfig'

// ProtectedRoute is rendered where a Route component would be and returns a Route which returns component/s to be rendered
// This allows us to wrap the component/s for a route in another component which we can place logic in to only render if 'xyz' conditions are met
const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route
    path={props.path}
    render={(props) => {
      return (
        <ProtectedContainer>
          <Component {...props} />
        </ProtectedContainer>
      )
    }}
  />
)

// Contains the logic to verify whether a user is authroised and what to do if they're not
const ProtectedContainer = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const checkToken = async () => {
    const token = localStorage.getItem('token')

    // If no token, user is not logged in, we redirect them to log-in
    if (token) {
      // Hit server checkAuth middleware to veryify JWT. If verified, user is verified and can access route
      try {
        const result = await axios.get('/auth/checkToken', {
          headers: {
            Authorization: token,
          },
        })
        setUser(result)
        setIsLoading(false)
      } catch (err) {
        console.log('IN CHECKTOKEN() CATCH')
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
    }
  }

  // run on all changes to this component to update authorised status accordingly
  useEffect(() => {
    checkToken()
  }, [])

  if (isLoading) {
    return null
  }

  if (!user) {
    return <Redirect to="/log-in" />
  }

  // Clone and return a new React element using element. The resulting element will have the original element’s props with the new props.
  // New children will replace existing children
  return React.cloneElement(children, { user })
}

export default ProtectedRoute
