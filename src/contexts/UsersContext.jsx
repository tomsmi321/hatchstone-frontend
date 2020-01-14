import React, { Component } from 'react';
import { createContext } from 'react';
import axios from '../config/axiosConfig';

// create the context object
export const UsersContext = createContext({})

// create context provider
class UsersContextProvider extends Component {
    // set some inital state for users
    state = {
        profiles: []
    }

    componentDidMount = async () => {
        console.log('in component did mount start');
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
        console.log('in component did mount end');
    }

    render() {
        return (
            <UsersContext.Provider value={{...this.state}}>
                {this.props.children}
            </UsersContext.Provider>
        )
    }

}

export default UsersContextProvider;


