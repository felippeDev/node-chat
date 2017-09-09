module.exports = (application) => {
    application.get('/', (req, res) => {
        application.controllers.index.home(application, req, res);
    })
}