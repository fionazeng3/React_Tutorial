import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        // assign key property only to the root 
        // of a list of components
        return <ImageCard key={image.id} image={image} />
    });
    return <div className="image-list">{images}</div>;
};

export default ImageList;