import React, { useState } from "react";
import './projectModal.css'

const Modal = ({ closeFunc, splashImg, images, title, year, content, links }) => {
    return (
        <div className="container__modal">
            <div className="container__modal-content">
                <span onClick={closeFunc} className='container__modal-close'>&times;</span>

                <div className="container__modal-image">
                    <img src={splashImg} alt="" />
                </div>
                <div className="container__modal-details">
                    <h2>{title + " (" + year + ")"}</h2>
                    <p>{content}</p>
                </div>
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
            <a onClick={toggleModal} className='btn'>Read more...</a>
            {isModalShown ? <Modal closeFunc={toggleModal} {...data} /> : <></>}
        </>
    )
};

export default ModalButton;