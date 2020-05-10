
const config = require('./config');
//Generic API Request
async function apiRequest(url, method, data, callback) {

    let options = {}

    if (method === 'POST') {
        options['method'] = method
        options['body'] = data
    }

    await fetch(url, options).then(
        response =>
            response.json()
    )
        .then(result => {
            callback(result);
        })
        .catch(error => {
            callback(error);
        });
}

//Upload File
export function uploadFile(file, callback) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');

    const url = `${config.API_URL}/upload`;
    apiRequest(url, 'POST', formData, callback)
}

//Fetch all Images
export function getImages(version, callback) {
    if (version === 0) {
        version = parseInt(Math.random() * 10000);
    }

    const url = `https://res.cloudinary.com/${config.CLOUD_NAME}/image/list/v${version}/test.json`;
    apiRequest(url, '', {}, callback)
}
