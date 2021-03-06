'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
    .module('clientApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/exchange'
            })
            .when('/portfolio/:action?/:ticker?', {
                templateUrl: 'views/portfolio.html',
                controller: 'PortfolioCtrl'
            })
            .when('/exchange', {
                templateUrl: 'views/exchange.html',
                controller: 'ExchangeCtrl'
            })
            .when('/transaction/:tradeId?', {
                templateUrl: 'views/transaction.html',
                controller: 'TransactionCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
