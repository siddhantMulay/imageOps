
const config = require('./config');
var cloudinary = require("cloudinary-core");

var cl = new cloudinary.Cloudinary({
    cloud_name: config.CLOUD_NAME,
    api_key: config.API_KEY,
    api_secret: config.API_SEC
});

//Generic API Request
async function apiRequest(url, method, data, callback) {

    let options = {
        method: method
    }

    if (method === 'POST') {
        options['body'] = data
    }

    await fetch(url, options).then(
        response => response.json()
    )
        .then(result => {
            callback(result);
        })
        .catch(error => {
            callback(error);
        });
}

//Upload File
function uploadFile(file, callback) {
    const formData = new FormData();
    formData.append('file', file[0]);
    formData.append('upload_preset', 'ml_default');
    formData.append('tags', 'test');

    const url = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/upload`;
    apiRequest(url, 'POST', formData, callback)
}

//Fetch all Images
function getImages(callback) {
    const url = `https://res.cloudinary.com/${config.CLOUD_NAME}/image/list/test.json`;
    apiRequest(url, 'GET', {}, callback)
}


module.exports = { getImages, uploadFile };