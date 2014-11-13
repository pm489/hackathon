/**
 * Created by mac on 12/11/2014.
 */
'use strict';
var app = require('../node_modules/express')();
var log = require('../node_modules/log4js').getLogger('bitTradeServer');

//basic configs, feel free to put them into a config file.
var port = 3000;
var env = 'dev';


//setup the middleware and APIs
require('./config/middleware')(app);
require('./config/api')(app, env);

app.start = function(){
    log.info('\n------------------------' +
        '\nRunning environment: ' + env +
        '\nBitTrade Server starting at port: ' + port +
        '\nhttp://localhost:' + port +
        '\nBitTrade started!' +
        '\nGood luck.' +
        '\n------------------------');
    app.listen(port);
};



module.exports = app;
