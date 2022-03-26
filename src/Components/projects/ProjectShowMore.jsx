import React, { useState } from "react";

import ModalButton from "./ProjectModal";
import TagList from "./TagList";

import './projectShowModal.css';

const ProjectShowMore = ({ displayList }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <>
            <div className="container portfolio__container">
                {
                    (isReadMore ? displayList.slice(0, 3) : displayList).map(({ id, splashImg, title, year, tags, content, ...others }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={splashImg} alt={title} />
                                </div>
                                
                                <TagList taglist={tags} />

                                <h3>{title + " (" + year + ")"}</h3>
                                {
                                    content.length > 140 ? <p>{content.slice(0,140) + "..."}</p> : <p>{content}</p>
                                }
                                
                                <div className='portfolio__item-cta'>
                                    <ModalButton title={title} year={year} tags={tags} content={content} {...others} />
                                </div>
                            </article>
                        )
                    })
                }
            </div>
            <div className='portfolio__container-showmore'>
                <a onClick={toggleReadMore} className="btn showmore">
                    {isReadMore ? "Show more" : "Show less"}
                </a>
            </div>
        </>
    );
};

export default ProjectShowMore;