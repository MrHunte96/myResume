import React from "react";

import "./imageSlideshow.css";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const ImageSlideshow = ({images}) => {
    return (
        <div className="container__modal-slideshow">
            <ImageGallery items={images} autoPlay={true}/>
        </div>
    );
};

export default ImageSlideshow;