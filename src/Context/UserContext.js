import { useReducer, useContext, createContext } from 'react';

const UserData = createContext();

export const UserContext = ({ initialState, reducer, children }) => {

    return (

        <UserData.Provider value={useReducer(reducer, initialState)}>
            {children}
        </UserData.Provider>
    )
}

export const User = () => {
    return useContext(UserData)
}