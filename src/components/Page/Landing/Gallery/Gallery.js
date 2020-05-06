import React, { Component } from 'react';
import './Gallery.scss';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
            images: []
        };
    }


    openImages = (images) => {

        this.setState({
            images
        }, () => {
            this.setState({
                isOpen: true
            })
        })

    }


    render() {
        const { photoIndex, isOpen, images } = this.state;
        const allImages = [
            "https://i.picsum.photos/id/743/200/200.jpg",
            "https://i.picsum.photos/id/866/200/200.jpg",
            "https://i.picsum.photos/id/966/200/200.jpg",
            "https://i.picsum.photos/id/237/200/200.jpg"
        ]
        return (
            <div className="gallery">
                <div className="galleryItem"
                    onClick={() => this.openImages(allImages)}>
                    <div className="images">
                        <img src="https://i.picsum.photos/id/743/200/200.jpg" alt="" />
                        <img src="https://i.picsum.photos/id/866/200/200.jpg" alt="" />
                        <img src="https://i.picsum.photos/id/966/200/200.jpg" alt="" />
                        <img src="https://i.picsum.photos/id/237/200/200.jpg" alt="" />
                    </div>
                    <span>Collection 1</span>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}

            </div>
        )
    }
}

export default Gallery;