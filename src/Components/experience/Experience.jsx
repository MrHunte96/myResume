import React from 'react';
import { AiFillCheckSquare } from 'react-icons/ai';

import './experience.css';

const languages = [
    { id: 1, language: 'C++', proficiency: 's100' },
    { id: 2, language: 'Python', proficiency: 's60' },
    { id: 3, language: 'C#', proficiency: 's40' },
    { id: 4, language: 'Html/Css', proficiency: 's20' },
    { id: 5, language: 'Javascript', proficiency: 's20' }
];

const softwares = [
    { id: 1, software: 'Unity3D', proficiency: 's80' },
    { id: 2, software: 'Photoshop', proficiency: 's80' },
    { id: 3, software: 'Maya', proficiency: 's60' },
    { id: 4, software: 'React', proficiency: 's20' },
    { id: 5, software: 'QT', proficiency: 's10' },
];

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__Languages'>
                    <h3>Languages</h3>
                    <div className='experience__content'>
                        {
                            languages.map(({ id, language, proficiency }) => {
                                return (
                                    <article key={id} className='experience__details'>
                                        <AiFillCheckSquare className='experience__details-icon' />
                                        <h4>{language}</h4>
                                        <div className="experience__details-experience-bar">
                                            <div className={"skills " + proficiency}>{proficiency.slice(1) + "%"}</div>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='experience__Software'>
                    <h3>Software</h3>
                    <div className='experience__content'>
                        {
                            softwares.map(({ id, software, proficiency }) => {
                                return (
                                    <article key={id} className='experience__details'>
                                        <AiFillCheckSquare className='experience__details-icon' />
                                        <h4>{software}</h4>
                                        <div className="experience__details-experience-bar">
                                            <div className={"skills " + proficiency}>{proficiency.slice(1) + "%"}</div>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;