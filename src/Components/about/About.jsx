import React from 'react';
import { BsAwardFill } from 'react-icons/bs'
import { AiFillFolder } from 'react-icons/ai'

import ProfileImg from '../../resources/background-texture.jpg'; //'../../resources/profile.jpg'

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
                            <br/>
                            <small>(Fresh Graduate)</small>
                        </article>
                        <article className='about__card'>
                            <AiFillFolder className='about__icon' />
                            <h5>Projects</h5>
                            <small>80+ completed</small>
                        </article>
                    </div>

                    <p>
                        lorem30 asdpj ao aoie fraweior aweio raoewra
                        skldfn paweo aowf nsfa oiewj foai efoawe faksw df;lskjfd oawe
                        asdpjasd asd asd f ewf g erg h szdgwer tgszdfgv azs gszdf
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>


            </div>
        </section>
    )
}

export default About;