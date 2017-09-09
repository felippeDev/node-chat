module.exports.home = (application, req, res) => {
    res.render(application.appDir + 'index', { validationErrors: {} });
}