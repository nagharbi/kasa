import React from "react";

function Tag(props) {
    return (
        <div className="tag">
            <p className="tag-content">{props.content}</p>
        </div>
    );
}

export default Tag;
