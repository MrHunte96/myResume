import React from 'react';
import { AiFillCheckSquare } from 'react-icons/ai';

//https://icons8.com/
//https://worldvectorlogo.com/
import c from '../../resources/Icons/c.svg';
import cplusplus from '../../resources/Icons/cplusplus.svg';
import csharp from '../../resources/Icons/csharp.svg';
import css from '../../resources/Icons/css.svg';
import html from '../../resources/Icons/html.svg';
import javascript from '../../resources/Icons/javascript.svg';
import maya from '../../resources/Icons/maya.svg';
import mysql from '../../resources/Icons/mysql.svg';
import photoshop from '../../resources/Icons/photoshop.svg';
import python from '../../resources/Icons/python.svg';
import qt from '../../resources/Icons/qt.svg';
import react from '../../resources/Icons/react.svg';
import unity3d from '../../resources/Icons/unity3d.svg';

import './experience.css';
const languages = [c, cplusplus, csharp, python, mysql/*, html, css, javascript*/];
const softwares = [unity3d, photoshop, maya/*, react, qt*/];

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                    <h3>Languages</h3>
                <div className='experience__content'>
                    {
                        languages.map((icon) => {
                            return (
                                <img className="experience__content-icon" src={icon} style={{ width: "48px", height: "48px" }}></img>
                            )
                        })
                    }
                </div>

                <h3>Software</h3>
                <div className='experience__content'>
                    {
                        softwares.map((icon) => {
                            return (
                                <img className="experience__content-icon" src={icon} style={{ width: "48px", height: "48px" }}></img>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Experience;