import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'n', 'i', 'e', 'l', ' ', 'W', 'i', 'n', 'n']
    const jobArray = ['c', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 's', 'c', 'i', 'e', 'n', 'c', 'e']
    const studentArray = ['s', 't', 'u', 'd', 'e', 'n', 't', '.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="Daniel Winn" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={studentArray}
                idx={36} />
                </h1>
                <h2>Aspiring Software Engineer / Web Developer</h2>
                <Link to="/contact" className='flat-button'>
                    CONTACT ME
                </Link>
            </div>
            <Logo />
        </div>
        <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Home