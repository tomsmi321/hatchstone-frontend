import React, { Component } from 'react';
import { createContext } from 'react';
import axios from '../config/axiosConfig';

// create the context object
export const UsersContext = createContext({})

// create context provider
class UsersContextProvider extends Component {
    // set some inital state for users
    state = {
        profiles: [],
        approvedClients: [],
        onboardingClients: []
    }

    componentDidMount = async () => {
        console.log('in componentDidMount');
        try {
            const result = await axios.get('/profiles');
            if(result.data) {
                this.setState({
                    profiles: result.data
                })
            }
        } catch(err) {
            console.log(err);
        } 
    }

    getApprovedClients = async () => {
        console.log('in getApprovedClients');
        try {
            const result = await axios.get('/profiles/profilesApproved');
            if(result.data) {
                this.setState({
                    approvedClients: result.data
                })
            }
        } catch(err) {
            console.log(err);
        }
    }
    
    getOnboardingClients = async () => {
        console.log('in getOnboardingClients');
        try {
            const result = await axios.get('/profiles/profilesOnboarding');
            if(result.data) {
                this.setState({
                    onboardingClients: result.data
                })
            }
        } catch(err) {
            console.log(err);
        }
    }


    render() {
        return (
            <UsersContext.Provider value={{
                ...this.state, 
                getApprovedClients: this.getApprovedClients, 
                getOnboardingClients: this.getOnboardingClients
            }}>
                {this.props.children}
            </UsersContext.Provider>
        )
    }

}

export default UsersContextProvider;


