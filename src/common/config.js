
const config = {
    CLOUD_NAME: 'sid-img-ops-bucket',
    API_URL: `https://api.cloudinary.com/v1_1/sid-img-ops-bucket`,
    IMAGE_BASE_URL: `https://res.cloudinary.com/sid-img-ops-bucket/image/upload`,
    IMAGE_RESOLUTIONS: {
        'horizontal': {
            'w': 755,
            'h': 450
        },
        'vertical': {
            'w': 365,
            'h': 450
        },
        'horizontal_small': {
            'w': 365,
            'h': 212
        },
        'gallery': {
            'w': 380,
            'h': 380
        },
    }
}


module.exports = config;