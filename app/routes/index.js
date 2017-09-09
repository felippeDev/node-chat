module.exports = (application) => {
    application.get('/', (req, res) => {
        console.log(application.appPath); //test
        application.controllers.index.home(application, req, res);
    })
}