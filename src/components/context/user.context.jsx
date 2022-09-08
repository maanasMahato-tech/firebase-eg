import { createContext, useState, useEffect } from 'react';
import { onUserAuthStateChanged, createUserDocFromAuth } from '../utils/firebase/firebase.config';

export const UserContext = createContext({
    CurrentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    const [CurrentUser, setCurrentUser] = useState(null);
    const value = { CurrentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onUserAuthStateChanged((user) => {
            setCurrentUser(user);
            if (user) {
                createUserDocFromAuth(user);
            }
        })

        return unsubscribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}