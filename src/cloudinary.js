cloudinary.config({
    cloud_name: '[CLOUD_NAME]',
    api_key: '[API_KEY]',
    api_secret: '[API_SECRET]'
});

cloudinary.uploader.upload('dog.mp4', function (result) {
    // Upload handler
    console.log('result: ', result);
}, {
        public_id: 'my_dog',
        resource_type: 'video'
    });