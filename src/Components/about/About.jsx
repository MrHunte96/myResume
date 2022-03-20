import React from 'react';
import { BsAwardFill } from 'react-icons/bs'
import { AiFillFolder } from 'react-icons/ai'

import ProfileImg from '../../resources/profile/profile4.jpg'; //'../../resources/profile.jpg'

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
                        I am passionate about programming and problem solving.
                        I love to read on how a piece of technology works. 
                        It's cool to see how human advance technology at such a rapid pace. <br />
                        My interest lies in logical and practical stuff and memorization. <br />
                        Always learn random languages or re-creating existing application.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>


            </div>
        </section>
    )
}

export default About;