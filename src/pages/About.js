import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import StaticContext from '../context/StaticContext';
import useLastNameSubmittedContext from '../hooks/useLastNameSubmitted';

function About() {

    const {lastNameSubmitted, setLastNameSubmitted} = useLastNameSubmittedContext();

    const refInput = useRef();

    const navigate = useNavigate();

    const handleSubmit = () => {
        setLastNameSubmitted([...lastNameSubmitted, refInput.current.value]);
        navigate('/');
    }

    const handleDelete = () => {
        setLastNameSubmitted([]);
        navigate('/');
    }

    return (
        <div>
            <h2>Hola desde about usuario: {lastNameSubmitted}</h2>
            <label>
                Inserte el nombre de usuario de contacto:
                <input type="text" ref={refInput} />
            </label>
            <button onClick={() => handleSubmit()}>Enviar</button>
            <button onClick={() => handleDelete()}>Borrar datos del Context</button>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    )
}

export default About
