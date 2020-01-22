import React, { Component } from 'react'
import { createContext } from 'react'
import axios from '../config/axiosConfig'

// create the context object
export const UsersContext = createContext({})

// Anything in here should relate to other users (users other than the currentUser)
class UsersContextProvider extends Component {
  // set some inital state for users
  state = {
    profiles: [],
    approvedClients: [],
    onboardingClients: [],
    profileDetails: {},
    isLoading: true,
  }

  // this will run first and provide all the profiles to anwhere that UsersContext is consumed
  componentDidMount = async () => {
    console.log('in componentDidMount')
    try {
      const result = await axios.get('/profiles')
      if (result.data) {
        this.setState({
          profiles: result.data,
          isLoading: false,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  // used in the approved clients page
  getApprovedClients = async () => {
    console.log('in getApprovedClients')
    try {
      const result = await axios.get('/profiles/profilesApproved')
      if (result.data) {
        this.setState({
          approvedClients: result.data,
          isLoading: false,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  // used in the onboarding clients page
  getOnboardingClients = async () => {
    console.log('in getOnboardingClients')
    try {
      const result = await axios.get('/profiles/profilesOnboarding')
      if (result.data) {
        this.setState({
          onboardingClients: result.data,
          isLoading: false,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  // Fetches one profile by userId
  getProfileDetails = async (userId) => {
    try {
      console.log(userId)
      const result = await axios.get(`profiles/findByUser/${userId}`)
      console.log(result.data[0])
      if (result.data) {
        this.setState({
          profileDetails: result.data[0],
          isLoading: false,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  // updates the approved status of a user
  updateApproveStatus = async (userId, newApproveVal) => {
    try {
      console.log(userId)
      const result = await axios.put(`profiles/updateByUser/${userId}`, {
        approved: newApproveVal,
      })
      console.log('in updateApproveStatus, printing result.data')
      console.log(result.data)
      if (result.data) {
        this.setState({
          profileDetails: {
            ...this.state.profileDetails,
            approved: newApproveVal,
          },
          isLoading: false,
        })
      }
      // this.setState({ someProperty: { ...this.state.someProperty, flag: false} });
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <UsersContext.Provider
        value={{
          ...this.state,
          getApprovedClients: this.getApprovedClients,
          getOnboardingClients: this.getOnboardingClients,
          getProfileDetails: this.getProfileDetails,
          updateApproveStatus: this.updateApproveStatus,
        }}
      >
        {this.props.children}
      </UsersContext.Provider>
    )
  }
}

export default UsersContextProvider
