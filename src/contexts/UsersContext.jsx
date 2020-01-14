import React from 'react';
import { createContext, useState, useEffect } from 'react';
import axios from '../config/axiosConfig';

// create the context object
export const UsersContext = createContext({})


// create context provider
const UsersContextProvider = (props) => {
    // set some inital state for users
    const [ profiles, setProfiles ] = useState([]);

    const getProfiles = async () => {
        console.log('getting profiles');
        try {
            const result = await axios.get('/profiles');
            setProfiles(result.data);
        } catch(err) {
            console.log(err);
        } 
    }

    useEffect(() => {
        getProfiles(profiles)
    }, [])

    return (
        <UsersContext.Provider value={{profile: profiles[0]}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider;


