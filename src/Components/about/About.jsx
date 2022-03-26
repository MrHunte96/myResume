import React from 'react';
import { BsAwardFill } from 'react-icons/bs'
import { AiFillFolder } from 'react-icons/ai'

import ProfileImg from '../../resources/profile/profile_square.jpg'; //'../../resources/profile.jpg'

import './about.css';

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ProfileImg} alt='About Image'></img>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <BsAwardFill className='about__icon' />
                            <h5>Experience</h5>
                            <small>0+ Year Working</small>
                            <br />
                            <small>(Fresh Graduate)</small>
                        </article>
                        <article className='about__card'>
                            <AiFillFolder className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ completed</small>
                        </article>
                    </div>

                    <p>
                        Technologies are cool, but do you know what else is? Zero Kelvin. <br />
                        I was introduced to programming in my polytechnic through game development.
                        The interest quickly grew and I became attached to it due to the fact that it requires problem solving and it's practicality.
                        This opened that door to endless possibilities in what I can program.
                        I am dedicated to improving skills through hands-on learning and development work. <br />
                        Adept at using C, C++, and other programming languages to produce clean code.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>


            </div>
        </section>
    )
}

export default About;