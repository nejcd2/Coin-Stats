import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.scss'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <div className='container'>
                <h1>Coin<span className='primary'>Stats</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='#featured'>Cryptocurrencies</a>
                    </li>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                </ul>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#FFF'}}/>) : (<FaBars size={20} style={{color: '#FFF'}} />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
