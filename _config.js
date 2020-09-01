var config = {}

// Update to have your correct username and password
config.mongoURI = {
production: 'mongodb+srv://test:gallery123@gallery.fpwpo.mongodb.net/darkroom?retryWrites=true&w=majority',
development: 'mongodb+srv://test:gallery123@gallery.fpwpo.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
test: 'mongodb+srv://test:gallery123@gallery.fpwpo.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;