/**
 * Created by ghemingway on 4/4/17.
 */
module.exports = app => {

    app.get('/v1/user/:user', (req, res) => {
        res.status(200).send({
            username: req.params.user,
            email: 'graham.hemingway@gmail.com'
        })
    });

};
