
import {
    LOAD_IMAGES,
    UPLOAD_IMAGE
} from '../actions/landingActions';

import { getImages, uploadFile } from '../../common/API';

const initialState = {
    imageUploading: false,
    imagesFound: false
}

function landingReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_IMAGES:
            getImages((response) => {
                console.log(response)
            })
            return {
                ...state
            };

        case UPLOAD_IMAGE:
            uploadFile(action.file, (response) => {
                console.log(response)
            });

            return {
                ...state
            };


        default:
            return state;
    }

}

export default landingReducer;