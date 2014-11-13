/**
 * Created by mac on 12/11/2014.
 */
'use strict';

var log = require('../../node_modules/log4js').getLogger('hanabiServer:api');
var express = require('../../node_modules/express');
var _ = require('../../node_modules/underscore');
var path = require('path');
var fs = require('fs');


module.exports = function (app, env) {

    /**
     * ------------------API start------------------------
     */



    /**
     * -------------------API end-------------------------
     */


    /**
     * ------------------pages start-----------------
     */
    app.route('/ping')
        .get(function (req, res) {
            log.info('someone is ping the client..');
            res.end('Hello! Server is running');
        });

    app.route('/')
        .get(function (req, res) {
            log.info('getting index...');
            req.user = null;
            var page = fs.readFileSync(path.resolve(__dirname + '/../../app/index.html'), {encoding: 'utf8'});
            res.end(page);
        });


    //handle requests for client side files, i.e. css, js...
    app.use('/bower_components',express.static(path.resolve(__dirname + '/../../bower_components')));
    app.use(express.static(path.resolve(__dirname + '/../../app')));


    /**
     * -----------------pages end---------------------
     */


    /**
     * ------------------exit handling----------------------
     */
    process.stdin.resume();//so the program will not close instantly

    function exitHandler(options, err) {
        if (options.cleanup) {
            log.info('doing clean up');

        }
        if (err) log.error(err.stack);
        if (options.exit) {
            log.info('Graceful exit:');
            process.exit();
        }
    }

    //do something when app is closing
    process.on('exit', exitHandler.bind(null, {cleanup: true}));

    //catches ctrl+c event
    process.on('SIGINT', exitHandler.bind(null, {exit: true}));

    //catches uncaught exceptions
    process.on('uncaughtException', exitHandler.bind(null, {exit: true}));
}
