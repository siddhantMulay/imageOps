
import dataStore from '../store';
import config from '../../common/config';
import { getImages, uploadFile } from '../../common/API';

//Load Images
export const LOAD_IMAGES = 'LOAD_IMAGES';
export async function loadImages(version) {

    let imagesAvail = false;
    let imgArr = [];
    let dimensionData = config.IMAGE_RESOLUTIONS;

    await getImages(version, (response) => {

        if (response !== undefined) {
            let allImages = response.resources;
            if (allImages !== undefined) {
                imagesAvail = true;
                allImages.forEach((item, index) => {
                    imgArr.push({
                        'id': index,
                        'images': []
                    })
                    for (let key in dimensionData) {
                        var keyName = dimensionData[key];
                        var dimensions = `w_${keyName.w},h_${keyName.h},c_fill`
                        var endpoint = `${config.IMAGE_BASE_URL}/${dimensions}/${item.public_id}.${item.format}`;
                        imgArr[index].images.push(endpoint)
                    }
                });
            }
        }

        imgArr = imgArr.reverse();

        dataStore.dispatch({
            type: LOAD_IMAGES,
            imagesAvail,
            imgArr
        })
    })
}

//Upload Image
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export async function uploadImage(file, callback) {

    await uploadFile(file, (response) => {
        callback(response)
        dataStore.dispatch({
            type: UPLOAD_IMAGE
        })
    });


}
