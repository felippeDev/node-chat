module.exports.startChat = (application, req, res) => {
    let formData = req.body;

    req.assert('nickname', 'Please type your name').notEmpty();

    let validationErrors = req.getValidationResult().then((errors) => {
        if (!errors.isEmpty()) {
            res.render('index', { validationErrors: errors.array() });
            return;
<<<<<<< HEAD
        } else {
            application.get('socketConnection').emit(
                'receiveMessage',
                {
                    nickname: formData.nickname,
                    message: 'Just entered on chat room...'
                });

            res.render('chat', { formData: formData });
=======
>>>>>>> parent of 5cb2e59... websocket still in progress
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