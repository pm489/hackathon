'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ExchangeCtrl
 * @description
 * # ExchangeCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ExchangeCtrl', function ($scope, $rootScope) {
        $rootScope.page = 'exchange';
        $scope.stocks = [
            {name: 'Google', ticker: 'GOOGL'},
            {name: 'Apple', ticker: 'AAPL'},
            {name: 'Credit Suisse', ticker: 'CS'},
            {name: 'UbiSoft Entertainment', ticker: 'UBI'},
            {name: 'Alibaba Group', ticker: 'BABA'},
            {name: 'Oracle Corporation', ticker: 'ORCL'},
            {name: 'Electronic Arts Inc.', ticker: 'EA'},
            {name: 'Amazon.com Inc.', ticker: 'AMZN'}
        ];

        $scope.selectedStock = {}
    });
