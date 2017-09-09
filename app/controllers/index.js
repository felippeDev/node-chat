const path = require('path');
const appDir = path.dirname(require.main.filename);

module.exports.home = (application, req, res) => {
    console.log(appDir);
    console.log(application.appDir);
    res.render(appDir + 'index', { validationErrors: {} });
}