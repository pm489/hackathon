/**
 * Created by mac on 12/11/2014.
 */
'use strict';
var express = require('../../node_modules/express');
var bodyParser = require('../../node_modules/body-parser');
var path = require('path');

module.exports = function (app) {
    /**
     * --------------basic setup-----------------------
     */
    app.use(require('../../node_modules/cookie-parser')());
    app.use(require('../../node_modules/express-session')({
        secret: 'bittrade secret',
        saveUninitialized: true,
        resave: true
    }));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
};