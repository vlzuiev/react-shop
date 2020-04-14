import React from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';
import img from '../../assets/Astronaut-big.png'
class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasErrored: false,
            errorMessage: ''
        }
    }  

    static getDerivedStateFromError(error) {
        //process the error
        return { hasErrored: true, errorMessage: error }
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        if (this.state.hasErrored) {
            return <ErrorImageOverlay>
                <ErrorImageContainer imageUrl={img} />
                <ErrorImageText>
                    This Page is Lost in Space 
                </ErrorImageText>
            </ErrorImageOverlay>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;