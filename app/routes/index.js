const path = require('path');
const appDir = path.dirname(require.main.filename);

module.exports = (application) => {
    application.get('/', (req, res) => {
        console.log(appDir); //test
        application.controllers.index.home(application, req, res);
    })
}