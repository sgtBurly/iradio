import React, { createContext, useState, useEffect } from 'react';

export const IradioContext = createContext();

export function IradioProvider (props){

    const [channels, setChannels] = useState(null)
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);


    const getAllChannels = async () => {
        let channels = await fetch('/channels');
        channels = await channels.json();
        console.log("This is channels in get func: ", channels);
        setChannels(channels);
    };

    useEffect( () => {
        getAllChannels()
    }, [])

    console.log("after init of get func");

    const loginFunc = (user) => {
        console.log("In loginFunc, this is user: ", user);
        setUsers(user);
    };

    const handleUserData = (newUser) => {
        console.log("New user in handleUserData: ", newUser);
    };

    const values = {
        channels,
        handleUserData,
        userLoggedIn,
        loginFunc
    };

    return(
        <IradioContext.Provider value = {values}>
            {props.children}
        </IradioContext.Provider>
    )

};

export default IradioProvider;