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

        $rootScope.page = 'portfolio';

        $scope.action = {
            buysell: $routeParams.action,
            ticker: $routeParams.ticker
        };

        $scope.myStocks = [

            {tradeId:'9393sf923s1p3',name: 'Google', ticker: 'GOOGL', spot: 547.31, boughtAt: 550.02, quantity: 100000, status: 'Executed'},
            {tradeId:'34nxkv934endov2', name: 'Apple', ticker: 'AAPL', spot: 111.25, boughtAt: 100.10, quantity: 2500, status: 'Executed'},
            {tradeId:'48034cnds2dxs', name: 'Credit Suisse', ticker: 'CS', spot: 18.20, boughtAt: 17.05, quantity: 2000000, status: 'Executed'},


            {tradeId:'998236sf23ss', name: 'Oracle Corporation', ticker: 'ORCL', spot: 20.76, boughtAt: 20.80, quantity: 7800, status: 'Pending Peer Match'},
            {tradeId:'88321ksbx220', name: 'Electronic Arts Inc.', ticker: 'EA', spot: 219, boughtAt: 220, quantity: 6550, status: 'Pending Sign'}
        ];


        $scope.myCommissions = [
            {tradeId: '2132s13dad312dsE', name: 'UbiSoft Entertainment', quantity: 2000, commission: 20, date: '09:20:23.234 13-Nov-2014', status:'done'},
            {tradeId: '452scvD0292s5621', name: 'Oracle Corporation', quantity: 100, commission: 4, date: '14:34:19.781 13-Nov-2014', status: 'signing'}
        ];

    });
