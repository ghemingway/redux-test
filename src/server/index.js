'use strict';

let path            = require('path'),
    express         = require('express'),
    bodyParser      = require('body-parser'),
    logger          = require('morgan');


let app = express();
let staticPath = path.join(__dirname, '../../public');
app.use(express.static(staticPath));
app.use(logger('dev'));
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

let server = app.listen(8080, () => {
    console.log('Example app listening on ' + server.address().port);
});