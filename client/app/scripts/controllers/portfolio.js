'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('PortfolioCtrl', function ($scope, $rootScope, $routeParams) {
        console.log($routeParams.action + ':' + $routeParams.ticker);

        $rootScope.page = 'portfolio';

        $scope.action = {
            action: $routeParams.action,
            ticker: $routeParams.ticker
        };

        $scope.myStocks = [

            {name: 'Google', ticker: 'GOOGL', spot: 547.31, boughtAt:550.02, quantity:100000, status:'Executed'},
            {name: 'Apple', ticker: 'AAPL',spot:111.25, boughtAt:100.10, quantity:2500, status:'Executed'},
            {name: 'Credit Suisse', ticker: 'CS', spot:18.20, boughtAt:17.05, quantity:2000000, status:'Executed'},


            {name: 'Oracle Corporation', ticker: 'ORCL', spot:20.76, boughtAt:20.80, quantity:7800, status:'Pending Peer Match'},
            {name: 'Electronic Arts Inc.', ticker: 'EA', spot:219, boughtAt:220, quantity:6550, status:'Pending Sign'}
        ];

    });
