import React from "react";


const PhotoManagerItem = (props) => {
    return (
        <React.Fragment>
            <div className="image-item-wrap" data-id = {props.id}>
                <span className="item-rm-btn" onClick={() => props.rmEvent(props.id)}></span>
                <img src={props.imageUrl} alt={props.imageName} />
            </div>
        </React.Fragment>
    )
}

export default PhotoManagerItem;