
import {
    LOAD_IMAGES,
    UPLOAD_IMAGE
} from '../actions/landingActions';

import { uploadFile } from '../../common/API';

const initialState = {
    imageUploading: false,
    imagesFound: false,
    imageData: []
}

function landingReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_IMAGES:

            return {
                ...state,
                imagesFound: action.imagesAvail,
                imageData: action.imgArr
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