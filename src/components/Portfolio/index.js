import React, { useEffect, useState } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [showCalculator, setShowCalculator] = useState(false); // Fuel Mix Calculator modal
    const [showCarGame, setShowCarGame] = useState(false); // Car Game modal
    const [cardExpanded, setCardExpanded] = useState(false); // State for card expansion

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (showCalculator || showCarGame) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showCalculator, showCarGame]);

    const handleCardClick = (app) => {
        if (app === 'calculator') {
            setShowCalculator(true);
        } else if (app === 'carGame') {
            setShowCarGame(true);
        }
        setCardExpanded(true);
    };

    const handleCloseModal = () => {
        setShowCalculator(false);
        setShowCarGame(false);
        setCardExpanded(false);
    };

    const handleModalClick = (e) => {
        if (e.target.classList.contains('calculator-modal')) {
            handleCloseModal();
        }
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

                <div
                    className={`project-card ${cardExpanded ? 'expanded' : ''}`}
                    onClick={() => handleCardClick('calculator')}
                >
                    <div className="card-content">
                        <h2>Fuel Mix Calculator</h2>
                        <p>A simple tool to calculate fuel mixtures for tuning vehicles on ethanol.</p>
                    </div>
                </div>

                <div
                    className={`project-card ${cardExpanded ? 'expanded' : ''}`}
                    onClick={() => handleCardClick('carGame')}
                >
                    <div className="card-content">
                        <h2>Car Game</h2>
                        <p>A simple car game where you dodge obstacles while speeding on the road.</p>
                    </div>
                </div>

                {showCalculator && (
                    <div className="calculator-modal" onClick={handleModalClick}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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

                {showCarGame && (
                    <div className="calculator-modal" onClick={handleModalClick}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={handleCloseModal}>×</button>
                            <h2>Car Game</h2>
                            <p>
                                Dodge obstacles and score points in this top-down car game!
                            </p>
                            <iframe
                                src="https://danie1winn.github.io/car-game/"
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
