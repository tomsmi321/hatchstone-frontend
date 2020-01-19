import React, { Component, createContext, useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import axios from '../config/axiosConfig';

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const [currentUserProfile, setCurrentUserProfile] = useState({});
    
    // we can not do an async call directly in useEffect so we need a function
    const getProfile = async (userId) => {
        try {
            console.log('in get profile');
            const result = await axios.get(`profiles/findByUser/${userId}`);
            console.log(result.data[0]);
                if(result.data) {
                    setCurrentUserProfile(result.data[0])
                }
        } catch(err) {
            console.log(err);
        }
    }

    // userId will be undefined first time, handle this and monitor for change in currentUser
    useEffect(() => {
        console.log('in useEffect - UserContext');
        if(currentUser && Object.keys(currentUser).length) {
            getProfile(currentUser._id);
        }
        console.log(`currentUserProfile \n`, currentUserProfile);
    }, [currentUser])

    
    return (
        <UserContext.Provider value={{
                currentUserProfile: currentUserProfile
        }}>
            {children}
        </UserContext.Provider>
    )

}



export default UserContextProvider
