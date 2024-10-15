import React, { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import GoogleDocumentViewer from '../GoogleDocumentViewer'; // Import GoogleDocumentViewer

const Resume = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);


    return (
        <>
        <div className="container resume-page">
            <h1 className="page-title">
                <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['R', 'e', 's', 'u', 'm', 'e']}
                        idx={15}
                />
            </h1>
            <div className="resume-document">
                <GoogleDocumentViewer />
            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Resume;
