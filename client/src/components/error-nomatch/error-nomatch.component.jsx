import React from 'react'
import { useLocation } from 'react-router-dom';
import { ErrorImageContainer, ErrorImageOverlay } from './error-nomatch.styles';
import img from '../../assets/O0DCcQy.png';

const ErrorPage = () => {
    const loc = useLocation();
    return <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={img} />
        <h1>Error 404</h1>
        <h3>No match for <code>{loc.pathname}</code></h3>
    </ErrorImageOverlay>

}

export default ErrorPage;