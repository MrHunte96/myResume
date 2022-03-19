import React from 'react';
import { useState } from 'react';

import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { RiGameFill } from 'react-icons/ri'
import { AiFillMessage } from 'react-icons/ai'

import './navBar.css';

const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" className={activeNav === '#' ? 'active' : ''}
                onClick={() => setActiveNav('#')}><AiFillHome /></a>

            <a href="#about" className={activeNav === '#about' ? 'active' : ''}
                onClick={() => setActiveNav('#about')} ><FaUserAlt /></a>

            <a href="#experience" className={activeNav === '#experience' ? 'active' : ''}
                onClick={() => setActiveNav('#experience')}><FaBook /></a>

            <a href="#projects" className={activeNav === '#projects' ? 'active' : ''}
                onClick={() => setActiveNav('#projects')}><RiGameFill /></a>

            <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}
                onClick={() => setActiveNav('#contact')}><AiFillMessage /></a>
        </nav>
    );
}

export default NavBar;