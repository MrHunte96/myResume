import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

import './footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>Hong Wei Portfolio</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Expeirience</a></li>
                <li><a href="#projects">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://linkedin.com'><BsLinkedin /></a>
                <a href='https://github.com'><BsGithub /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Hong Wei Portfolio. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer