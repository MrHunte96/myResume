import React, { useState } from 'react';

import ShowMoreProjects from './ProjectShowMore'

import Img1 from '../../resources/dummy.jpg'

import './projects.css';

const projects = [
    {
        id: 1,
        image: Img1,
        title: 'Spiritus',
        viewmore: 'modal',
        download: 'https://google.com'
    }, {
        id: 2,
        image: Img1,
        title: 'Cosmic Hunter : Bounties of the Galaxy',
        viewmore: 'modal',
        download: 'https://google.com'
    }, {
        id: 3,
        image: Img1,
        title: 'Yippy\'s Fortress',
        viewmore: 'modal',
        download: 'https://google.com'
    }, {
        id: 4,
        image: Img1,
        title: 'Step',
        viewmore: 'modal',
        download: 'https://google.com'
    }, {
        id: 5,
        image: Img1,
        title: 'Numerelic',
        viewmore: 'modal',
        download: 'https://google.com'
    }, {
        id: 6,
        image: Img1,
        title: 'Numerelic',
        viewmore: 'modal',
        download: 'https://google.com'
    }, {
        id: 7,
        image: Img1,
        title: 'Undefined Invasion',
        viewmore: 'modal',
        download: 'https://google.com'
    }, {
        id: 8,
        image: Img1,
        title: 'Vroom Vroom Rider',
        viewmore: 'modal',
        download: 'https://google.com'
    }
];

const personalProjects = [
    {
        id: 1,
        image: Img1,
        title: 'Wordle In Python',
        viewmore: 'modal',
        download: 'https://google.com'
    },{
        id: 2,
        image: Img1,
        title: 'Bounce Classic In Python',
        viewmore: 'modal',
        download: 'https://google.com'
    },{
        id: 3,
        image: Img1,
        title: 'N-Queens Problem',
        viewmore: 'modal',
        download: 'https://google.com'
    },{
        id: 4,
        image: Img1,
        title: 'Undefined Invasion - Invaded',
        viewmore: 'modal',
        download: 'https://google.com'
    },{
        id: 5,
        image: Img1,
        title: 'Spam Da Button',
        viewmore: 'modal',
        download: 'https://google.com'
    },{
        id: 6,
        image: Img1,
        title: 'Prisoner Escape',
        viewmore: 'modal',
        download: 'https://google.com'
    },{
        id: 7,
        image: Img1,
        title: 'Zoe Adventure',
        viewmore: 'modal',
        download: 'https://google.com'
    }
];


const Projects = () => {
    return (
        <section id="projects">
            <h5>My Recent Work</h5>
            <h2>Maxi Projects</h2>

            <ShowMoreProjects displayList={projects} />

            <br /><br />
            <h2>Mini Personal Projects</h2>

            <ShowMoreProjects displayList={personalProjects} />
           
        </section>
    );
}

export default Projects;