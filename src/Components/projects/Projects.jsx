import React from 'react';

import Img1 from '../../resources/background-texture.jpg'

import './projects.css';

const data = [
    {
        id: 1,
        image: Img1,
        title: 'my title1',
        viewmore: 'modal',
        download: 'https://google.com'
    }, {
        id: 2,
        image: Img1,
        title: 'my title2',
        viewmore: 'modal',
        download: 'https://google.com'
    }, {
        id: 3,
        image: Img1,
        title: 'my title3',
        viewmore: 'modal',
        download: 'https://google.com'
    }, {
        id: 4,
        image: Img1,
        title: 'my title5',
        viewmore: 'modal',
        download: 'https://google.com'
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, viewmore, download }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={viewmore} className='btn'>View more</a>
                                    <a href={download} className='btn btn-primary'>Download</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Projects;