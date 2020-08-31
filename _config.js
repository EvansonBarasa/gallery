var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://test:test@gallery.fpwpo.mongodb.net/<dbname>?retryWrites=true&w=majority',
    //development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    //test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
