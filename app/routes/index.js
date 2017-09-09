module.exports = (application) => {
    application.get('/', (req, res) => {
        console.log(appDir); //test
        application.controllers.index.home(application, req, res);
    })
}