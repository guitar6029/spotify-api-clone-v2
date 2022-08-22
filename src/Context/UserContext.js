import {useState, useContext, createContext} from 'react';

const UserData = createContext();

export const UserContext = ({children}) => {
  
    const [username, setUsername] = useState(null);

    const getUserName = (_username) => {
        setUsername(_username);
    }

    return (

        <UserData.Provider value={{getUserName}}>
            {children}
        </UserData.Provider>
  )
}

export const User = () => {
    return useContext(UserData)
}