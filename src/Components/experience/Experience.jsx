import React from 'react';
import { AiFillCheckSquare } from 'react-icons/ai';

import './experience.css';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__Languages'>
                    <h3>Languages</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <AiFillCheckSquare className='experience__details-icon' />
                            <div>
                                <h4>C++</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <AiFillCheckSquare className='experience__details-icon' />
                            <div>
                                <h4>C#</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <AiFillCheckSquare className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className='experience__Software'>
                    <h3>Software</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <AiFillCheckSquare className='experience__details-icon' />
                            <div>
                                <h4>QT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <AiFillCheckSquare className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <AiFillCheckSquare className='experience__details-icon' />
                            <div>
                                <h4>Unity3D</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <AiFillCheckSquare className='experience__details-icon' />
                            <div>
                                <h4>Unity3D</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;