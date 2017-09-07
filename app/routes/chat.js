module.exports = (application) => {
    application.get('/chat', (req, res) => {
        application.app.controllers.chat.startChat(application, req, res);
    })

    application.post('/chat', (req, res) => {
        application.app.controllers.chat.startChat(application, req, res);
    })
}