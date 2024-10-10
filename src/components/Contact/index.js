import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm( 'service_u8y7ls9', 'template_02v8jy4', form.current, 'ARyEldSR6F-YYFBTz')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}                       
                        />
                    </h1>
                    <p>
                        I'm interested in any job or internship opportunities related to computer science, data science, web development or software engineering. Feel free to reach out to me with any inquiries or questions using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name" 
                                        required 
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required 
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required 
                                    />
                                </li>
                                <li>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        required 
                                    />
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Daniel Winn,
                    <br />
                    Long Beach,
                    <br />
                    California,
                    <br />
                    United States
                    <br />
                    <span>daniel.winn.biz@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[33.781858, -118.114965]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[33.781858, -118.114965]}>
                            <Popup>Daniel Winn was here, meet me at the College of Engineering c:</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Contact
