import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from './config/axiosConfig'

const ProtectedRoute = ({ component: Component, ...props }) => {
  let history = useHistory()

  const [user, setUser] = useState({
    auth: null,
    loading: true,
  })

  const token = localStorage.getItem('token')
  const checkToken = async () => {
    try {
      await axios.get('auth/check-token', {
        headers: {
          Authorization: `Bearer ${token}`,
        } 
      }) 
      setUser({
        auth: true,
        loading: false,
      })
    }
    catch (err) {
      setUser({
        auth: false,
        loading: false,
      })
    }
  }

  useEffect(() => {
    console.log('IN USEFFECT() PROTECTEDROUTE')
    const token = localStorage.getItem('token')
    console.log(token)
    checkToken(token)
  }, [])

  if (user.loading) {
    return null
  } else if (!user.auth) {
    return <Redirect to="/login" />
  } else {
    return <Component user={user.auth} history={history} {...props} />
  }
}

export default ProtectedRoute

