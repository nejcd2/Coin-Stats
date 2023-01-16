
import React from 'react'
import {FaGithub} from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer' id='about'>
            <div className='container'>

                <div className='col'>
                    <h5>About</h5>
                    <span className='bar'></span>
                    <ul>
                        <li>Built with React</li>
                        <li>Nejc Drobnič 2022</li>
                    </ul>

                </div>
                <div className='col'>
                    <h5>GitHub</h5>
                    <span className='bar'> </span>
                        <a href='https://github.com/nejcd2' target='blank'><FaGithub className='icon' size={30} color="white"/></a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
