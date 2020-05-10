
import {
    LOAD_IMAGES,
    UPLOAD_IMAGE
} from '../actions/landingActions';

const initialState = {
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
            return {
                ...state
            };


        default:
            return state;
    }

}

export default landingReducer;