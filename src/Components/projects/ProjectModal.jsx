import React, { useState } from "react";

import TagList from "./TagList";
import LinkList from "./LinkList";
import YouTubePlayer from "./YoutubeEmbed";
import ImageSlideshow from "./ImageSlideshow";

import './projectModal.css'

const Modal = ({ closeFunc, images, videoid, title, year, tags, content, links }) => {
    return (
        <div className="container__modal">
            <div className="container__modal-content">
                <span onClick={closeFunc} className='container__modal-close'>&times;</span>

                {
                    images.length > 0 ? (
                        <ImageSlideshow images={images} />
                    ) : videoid.length > 0 ? (
                        <YouTubePlayer id={videoid} />
                    ) : (<></>)
                }

                <TagList taglist={tags} />

                <div className="container__modal-details">
                    <h2>{title + " (" + year + ")"}</h2>
                    {
                        content.split('\n').map(i => {return <p>{i}</p>})
                    }
                </div>

                <LinkList linklist={links} />
            </div>
        </div>
    )
};

const ModalButton = ({ ...data }) => {
    const [isModalShown, setIsModalShown] = useState(false);
    const toggleModal = () => {
        setIsModalShown(!isModalShown);
    };
    return (
        <>
            <span onClick={toggleModal} className='btn'>Read more...</span>
            {isModalShown ? <Modal closeFunc={toggleModal} {...data} /> : <></>}
        </>
    )
};

export default ModalButton;