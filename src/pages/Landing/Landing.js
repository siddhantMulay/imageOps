import React, { Component } from 'react';
import './Landing.scss';
import { connect } from 'react-redux';
import Button from '../../components/Common/Button/Button';

import EmptyState from '../../components/Page/Landing/EmptyState/EmptyState';
import Gallery from '../../components/Page/Landing/Gallery/Gallery';

import { loadImages, uploadImage } from '../../redux/actions/landingActions';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    triggerImageSelection = () => {
        this.fileInput.current.click();
    }

    componentDidMount() {
        loadImages()
    }

    onFileSelect = (event) => {
        uploadImage(event.target.files)
    }

    render() {
        const { imageUploading, imagesFound, imageData } = this.props;
        return (
            <div data-page="landing">
                 <Button
                    text="Let's Upload"
                    action={this.triggerImageSelection}
                />
                <div className="galleryContainer">
                    {imagesFound ?
                        <Gallery imageData={imageData} />
                        :
                        <EmptyState
                            text={"Thing's empty"}
                            loading={imageUploading}
                            action={this.triggerImageSelection} />
                    }
                    <input
                        type="file"
                        ref={this.fileInput}
                        accept="image/*"
                        onChange={(event) => {
                            this.onFileSelect(event)
                        }}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const landingStore = state.landing;
    return {
        imageUploading: landingStore.imageUploading,
        imagesFound: landingStore.imagesFound,
        imageData: landingStore.imageData
    }

}
export default connect(mapStateToProps)(Landing);