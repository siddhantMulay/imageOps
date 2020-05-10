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
            images: [],
            imagTitles: [
                "Horizontal - 755x450",
                "Vertical - 365x450",
                "Horizontal Small - 365x212",
                "Gallery - 380x380"
            ]
        };
    }

    renderImages = (images) => {
        let retArr = [];
        images.forEach((item, index) => {
            retArr.push(<img
                key={`img${index + 2}`}
                src={item}
                alt="" />)
        })
        return retArr;
    }

    renderGalleryItems = () => {
        const { imageData } = this.props;
        let retArr = [];
        imageData.forEach((item, index) => {
            var allImages = imageData[index].images;
            retArr.push(
                <div className="galleryItem" key={`gi${index}`}
                    onClick={() => this.openImages(allImages)}>
                    <div className="images">
                        {this.renderImages(allImages)}
                    </div>
                    <span>Collection {index + 1}</span>
                </div>
            )
        });
        return retArr;
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
        const { photoIndex, isOpen, images, imagTitles } = this.state;
        return (
            <div className="gallery">
                {this.renderGalleryItems()}

                {isOpen && (
                    <Lightbox
                        imageTitle={imagTitles[photoIndex]}
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