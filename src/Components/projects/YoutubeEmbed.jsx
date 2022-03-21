import React from "react";

import './youtubeEmbed.css';

const YouTubePlayer = ({id}) => {
    return (
        <div className="youtube__container">
            <iframe  className="youtube__container-iframe" src={"https://www.youtube.com/embed/" + id}></iframe>
        </div>
    )
};

export default YouTubePlayer;