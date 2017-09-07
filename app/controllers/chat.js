module.exports.startChat = (application, req, res) => {
    let formData = req.body;

    req.assert('nickname', 'Please type your name').notEmpty();

    let validationErrors = req.getValidationResult().then((errors) => {
        if (!errors.isEmpty()) {
            res.render('index', { validationErrors: errors.array() });
            return;
        }

        // application.get('socketConnection').emit(
        //     'userConnectedMessage',
        //     {
        //         nickname: formData.nickname,
        //         message: ' has just logged connected..'
        //     });

        res.render('chat');
    });
}