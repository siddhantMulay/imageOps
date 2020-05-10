
const config = require('./config');
var cloudinary = require("cloudinary-core");

var cl = new cloudinary.Cloudinary();

//Generic API Request
async function apiRequest(url, method, data, callback) {

    let options = {}

    if (method === 'POST') {
        options['method'] = method
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
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');

    const url = `${config.API_URL}/upload`;
    apiRequest(url, 'POST', formData, callback)
}

//Fetch all Images
function getImages(callback) {
    const url = `http://res.cloudinary.com/${config.CLOUD_NAME}/image/list/test.json`;
    apiRequest(url, '', {}, callback)
}


module.exports = { getImages, uploadFile };