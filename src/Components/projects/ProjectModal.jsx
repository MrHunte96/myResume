import React, { useState } from "react";
import './projectModal.css'

const Modal = ({ closeFunc, image, content }) => {
    return (
        <div className="container__modal">
            <div className="container__modal-content">
                <span onClick={closeFunc} className='container__modal-close'>&times;</span>

                <div className="portfolio__item-image">
                    <img src={image} alt="" />
                </div>
                <p>{content}</p>
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
            <a onClick={toggleModal} className='btn'>Show Modal</a>
            {isModalShown ? <Modal closeFunc={toggleModal} {...data} /> : <></>}
        </>
    )
};

export default ModalButton;