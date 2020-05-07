import React, { Component } from 'react';
import './Landing.scss';
import { connect } from 'react-redux';

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
        // event.target.value = null;
    }

    render() {
        const { imageUploading } = this.props;
        return (
            <div data-page="landing">
                <div className="galleryContainer">
                    <EmptyState
                        text={"Thing's empty"}
                        loading={imageUploading}
                        action={this.triggerImageSelection} />
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
        imagesFound: landingStore.imagesFound
    }

}
export default connect(mapStateToProps)(Landing);