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
                    (isReadMore ? displayList.slice(0, 3) : displayList).map(({ id, image, title, viewmore, download }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <ModalButton image={image} content={viewmore}/>
                                    <a href={download} className='btn btn-primary'>Download</a>
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