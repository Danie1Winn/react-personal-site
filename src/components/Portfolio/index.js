import React, { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [showCalculator, setShowCalculator] = useState(false); // State to toggle app popout
    const [cardExpanded, setCardExpanded] = useState(false); // State to track whether the card is expanded

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (showCalculator) {
            // Disable body scrolling when the modal is open
            document.body.classList.add('no-scroll');
        } else {
            // Re-enable scrolling when the modal is closed
            document.body.classList.remove('no-scroll');
        }
    }, [showCalculator]);

    const handleCardClick = () => {
        setShowCalculator(true);
        setCardExpanded(true); // Expand the card when clicked
    };

    const handleCloseModal = () => {
        setShowCalculator(false);
        setCardExpanded(false); // Shrink the card when the modal is closed
    };

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                        idx={15}
                    />
                </h1>

                {/* Fuel Mix Calculator Card */}
                <div
                    className={`project-card ${cardExpanded ? 'expanded' : ''}`} // Conditionally apply 'expanded' class
                    onClick={handleCardClick}
                >
                    <div className="card-content">
                        <h2>Fuel Mix Calculator</h2>
                        <p>A simple tool to calculate fuel mixtures for tuning vehicles on ethanol.</p>
                    </div>
                </div>

                {showCalculator && (
                    <div className="calculator-modal">
                        <div className="modal-content">
                            <button className="close-button" onClick={handleCloseModal}>×</button>
                            <h2>Fuel Mix Calculator</h2>
                            <p>
                                This tool allows users to calculate the optimal fuel mixture for tuning cars on ethanol.
                                Simply input your tank size, current fuel levels, and desired ethanol percentage.
                            </p>
                            <iframe
                                src="https://danie1winn.github.io/fuel-mix-calculator/"
                                width="100%"
                                height="600px"
                                style={{ border: 'none' }}
                            />
                        </div>
                    </div>
                )}
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    );
};

export default Portfolio;
