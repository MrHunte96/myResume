import React, { useState } from "react";
import ModalButton from "./ProjectModal";

const ProjectShowMore = ({ displayList }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <>
            <div className="container portfolio__container">
                {
                    (isReadMore ? displayList.slice(0, 3) : displayList).map(({ id, splashImg, images, title, year, content, links }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={splashImg} alt={title} />
                                </div>

                                <h3>{title + " (" + year + ")"}</h3>
                                {
                                    content.length > 140 ? <p>{content.slice(0,140) + "..."}</p> : <p>{content}</p>
                                }
                                
                                <div className='portfolio__item-cta'>
                                    <ModalButton splashImg={splashImg} images={images} title={title} year={year} content={content} links={links}/>
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