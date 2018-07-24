import React from 'react';
import './Header.css';
import './HeaderTitle';
import './HeaderContent';

const ImageThumbnail = () => {
    return (
        <div class="thumbnail-wrapper">
            <img 
            class="image-thumbnail" 
            src="https://ibin.co/3whrpKSBbZ81.png" 
            alt="A Lambda School logo" 
            />
        </div>
    );
}

export default ImageThumbnail;