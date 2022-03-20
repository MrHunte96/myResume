import React from "react";

import './tagList.css'

const TagList = (({taglist}) => {
    return (
        <div className="tagList">
        {
            taglist.map((tagname) => { return <small className="tagItem">{tagname}</small>})
        }
        </div>
    )
});

export default TagList;