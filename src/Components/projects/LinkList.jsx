import React from "react";

import './linklist.css'

const LinkList = (({linklist}) => {
    return (
        <div className="linkList">
        {
            linklist.map((linkarr) => 
            { 
                return (<a href={linkarr[1]} target="_blank" rel="noreferrer" className="btn btn-primary linkItem">{linkarr[0]}</a>)
            })
        }
        </div>
    )
});

export default LinkList;