import React from "react";
import { useState } from "react";
import { useRef } from "react";
import PhotoManagerItem from "../PhotoManagerItem/PhotoManagerItem";

const PhotoManager = () => {
    
    const initialState = {
        galeryItems: [],
    }
    const [photoManagerState, setPhotoManager] = useState(initialState);
    const mainInput = useRef(null);

    const mainInputChangeHandler = (e) => {
        const files = mainInput.current.files;
        if (files.length) {
            Object.entries(files).forEach((fileObj) => {
                const url = createDataUrlFile(fileObj);
                const id = Math.random().toString(36).substr(2, 9);
                setPhotoManager(prevState => ({
                    ...prevState,
                    galeryItems: [...prevState.galeryItems, { 
                        id: id, imageName: fileObj[0].name, 
                        imageUrl: url,
                        rmEvent: removeImageHandler,
                    }],
                }));
            });
        }
    }

    const createDataUrlFile = (fileObj) => {
        const url = URL.createObjectURL(fileObj[1]);
        return url;
    }

    const removeImageHandler = (id) => {
        setPhotoManager(prevState => ({
            ...prevState,
            galeryItems: [...prevState.galeryItems].filter((item) => item.id !== id),
        }));
    }

    return (
        <React.Fragment>
            <div className="app-container">
                <div className="main-input-container">
                    <div className="main-input-wrap">
                        <label htmlFor="main-input"></label>
                        <input ref={mainInput} onChange={mainInputChangeHandler} type="file" id="main-input" multiple={true}></input>
                        <span className="file-input-mock">Click to select</span>
                    </div>
                </div>

                <div className="galery-wrap">
                    {photoManagerState.galeryItems.map((item, i) => {
                        return (
                            <PhotoManagerItem 
                                key={item.id} 
                                id={item.id} 
                                name={item.imageName} 
                                imageUrl={item.imageUrl}
                                rmEvent = {item.rmEvent}
                            ></PhotoManagerItem>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default PhotoManager;