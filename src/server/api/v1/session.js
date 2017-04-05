
let Joi = require('joi');


module.exports = app => {

    app.post('/v1/session', (req, res) => {
        // Validate incoming request has username and password, if not return 400:'username and password are required'
        let schema = Joi.object().keys({
            username: Joi.string().lowercase().required(),
            password: Joi.string().required()
        });
        Joi.validate(req.body, schema, { stripUnknown: true }, (err, data) => {
            if (err) {
                const message = err.details[0].message;
                console.log(`Session.login validation failure: ${message}`);
                res.status(400).send({ error: message });
            } else {
                // TODO: Fetch data from DB and validate username/password
                // Gen session and move on
                req.session.regenerate(() => {
                    req.session.username = data.username;
                    console.log(`Session.login success: ${req.session.username}`);
                    // If a match, return 201
                    res.status(201).send({
                        username: req.session.username,
                        email: 'graham.hemingway@gmail.com'
                    });
                });
            }
        });
    });

};
