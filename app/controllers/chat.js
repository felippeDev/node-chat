module.exports.startChat = (application, req, res) => {
    let formData = req.body;

    req.assert('nickname', 'Please type your name').notEmpty();

    let validationErrors = req.getValidationResult().then((errors) => {
        if (!errors.isEmpty()) {
            res.render('index', { validationErrors: errors.array() });
            return;
        } else {
            application.get('socketConnection').emit(
                'userConnectedMessage',
                {
                    nickname: formData.nickname,
                    message: 'Just entered on chat room...'
                });

            res.render('chat');
        }
    });
}