import React from 'react'
import { Link } from 'react-router-dom'
import useLastNameSubmittedContext from '../hooks/useLastNameSubmitted';

function Home() {

    // In this case, we are using the hook to get the lastNameSubmitted context value
    const {lastNameSubmitted} = useLastNameSubmittedContext();

    return (
        <div>
            <h2>Hola desde Home usuario: {lastNameSubmitted}</h2>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}

export default Home
