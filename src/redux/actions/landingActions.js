
import dataStore from '../store';

//Load Images
export const LOAD_IMAGES = 'LOAD_IMAGES';
export async function loadImages() {
    await dataStore.dispatch({
        type: LOAD_IMAGES
    })
}

//Upload Image
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export async function uploadImage(file) {
    await dataStore.dispatch({
        type: UPLOAD_IMAGE,
        file
    })
}
