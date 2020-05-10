import React, { Component } from 'react';
import './Landing.scss';
import { connect } from 'react-redux';
import Button from '../../components/Common/Button/Button';

//Get the components
import EmptyState from '../../components/Page/Landing/EmptyState/EmptyState';
import Gallery from '../../components/Page/Landing/Gallery/Gallery';
import Notification from '../../components/Common/Notification/Notification';
import Loader from '../../components/Common/Loader/Loader';

import { loadImages, uploadImage } from '../../redux/actions/landingActions';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            showNoti: false,
            notiType: "",
            notifyText: "",
            imgLoading: true
        }
    }

    triggerImageSelection = () => {
        this.fileInput.current.click();
    }

    componentDidMount() {
        loadImages(0).then(() => {
            this.setState({
                imgLoading: false
            })
        })
    }

    notificationToggle = (show, type, text) => {
        this.setState({
            showNoti: show,
            notiType: type,
            notifyText: text
        }, () => {
            setTimeout(() => {
                this.setState({
                    showNoti: false
                })
            }, 2500)
        })
    }

    onFileSelect = (event) => {
        let scopeThis = this;
        let file = event.target.files[0];
        let img = new Image();
        let _URL = window.URL || window.webkitURL;
        img.src = _URL.createObjectURL(file);
        img.onload = function () {
            let imgWid = this.width;
            let imgHeight = this.height;

            if (imgWid !== 1024 && imgHeight !== 1024) {
                scopeThis.notificationToggle(true, "error", "Image provided is not 1024x1024");
            }
            else {
                scopeThis.notificationToggle(true,
                    "upload",
                    "Pushing the image up to the sky!");

                uploadImage(file, (response) => {
                    let imgUploaded = Object.keys(response).length > 0 ? true : false;
                    scopeThis.notificationToggle(imgUploaded,
                        imgUploaded ? "success" : "error",
                        imgUploaded ? "Image Uploaded, Nice!" : "Something went wrong bro.");
                    if (imgUploaded) {
                        scopeThis.setState({
                            imgLoading: true
                        })
                        loadImages(response.version).then(() => {
                            scopeThis.setState({
                                imgLoading: false
                            })
                        })
                    }
                });
            }
        };
    }

    render() {
        const { imagesFound, imageData } = this.props;
        const { showNoti, notiType, notifyText, imgLoading } = this.state;

        return (
            <div data-page="landing">

                {imagesFound ? <span className="uploadContainer">
                    <Button
                        text="Upload"
                        action={this.triggerImageSelection}
                    />
                    <span className="note">only 1024x1024 image is accepted</span>
                </span>
                    : null}
                <div className="galleryContainer">
                    {imagesFound ?
                        <Gallery imageData={imageData} />
                        :
                        <EmptyState
                            text={"Thing's empty"}
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

                <Notification
                    show={showNoti}
                    type={notiType}
                    msg={notifyText} />

                <Loader
                    active={imgLoading}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const landingStore = state.landing;
    return {
        imagesFound: landingStore.imagesFound,
        imageData: landingStore.imageData
    }

}
export default connect(mapStateToProps)(Landing);