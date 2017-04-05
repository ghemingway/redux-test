'use strict';

let path            = require('path'),
    express         = require('express'),
    bodyParser      = require('body-parser'),
    session         = require('express-session'),
    logger          = require('morgan');

let app = express();
let staticPath = path.join(__dirname, '../../public');
app.use(express.static(staticPath));
app.use(logger('dev'));
// Setup pipeline support for server-side templates
app.engine('pug', require('pug').__express);
app.set('views', __dirname);
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
// Setup pipeline session support
app.use(session({
    name: 'session',
    secret: 'ohhellyes',
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: false,
        secure: false
    }
}));

// Setup API endpoints
require('./api/v1/session')(app);
require('./api/v1/user')(app);

// Render SPA base
app.get('*', (req, res) => {
    res.render('base.pug');
});

// Listen for stuff
let server = app.listen(8080, () => {
    console.log('Example app listening on ' + server.address().port);
});