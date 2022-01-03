import { useContext } from 'react';
import InfoContext from '../context/InfoContext';

export default function useLastNameSubmittedContext() {
    const infoContext = useContext(InfoContext);
    return infoContext;
}