import React from 'react';
import './Gallery.scss';


function Gallery(props) {
    return (
        <div className="gallery">
            <div className="galleryItem">
                <div className="images">
                    <img src="https://i.picsum.photos/id/743/200/200.jpg" alt="" />
                    <img src="https://i.picsum.photos/id/866/200/200.jpg" alt="" />
                    <img src="https://i.picsum.photos/id/966/200/200.jpg" alt="" />
                    <img src="https://i.picsum.photos/id/237/200/200.jpg" alt="" />
                </div>
                <span>Collection 1</span>
            </div>
        </div>
    )
}

export default Gallery;