import React from "react";

import './tagList.css'

const TagList = (({taglist}) => {
    return (
        <div className="portfolio__item-tagList">
        {
            taglist.map((tagname) => { return <small className="portfolio__item-tagItem">{tagname}</small>})
        }
        </div>
    )
});

export default TagList;