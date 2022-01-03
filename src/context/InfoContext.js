import React, {useState} from 'react';

const Context = React.createContext({})

// Here we can create our own provider
export function InfoProvider ({children}) {
    const [lastNameSubmitted, setLastNameSubmitted] = useState([])

    return (
        <Context.Provider value={{lastNameSubmitted, setLastNameSubmitted}}>
            {children}
        </Context.Provider>
    )
}
export default Context;
