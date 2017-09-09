module.exports.home = (application, req, res) => {
    res.render(__dirname + 'index', { validationErrors: {} });
}