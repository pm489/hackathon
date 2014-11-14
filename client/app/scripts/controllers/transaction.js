'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TransactionCtrl
 * @description
 * # TransactionCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TransactionCtrl', function ($scope, $rootScope, $routeParams, $timeout , $interval) {
        $rootScope.page = 'transaction';

        $scope.tradeId = $routeParams.tradeId;


        $scope.myStocks = [{tradeId:'9393sf923s1p3',name: 'Google', ticker: 'GOOGL', spot: 547.31, boughtAt: 550.02, quantity: 100000, status: 'Executed'},
        {tradeId:'34nxkv934endov2', name: 'Apple', ticker: 'AAPL', spot: 111.25, boughtAt: 100.10, quantity: 2500, status: 'Executed'},
        {tradeId:'48034cnds2dxs', name: 'Credit Suisse', ticker: 'CS', spot: 18.20, boughtAt: 17.05, quantity: 2000000, status: 'Executed'},


        {tradeId:'998236sf23ss', name: 'Oracle Corporation', ticker: 'ORCL', spot: 20.76, boughtAt: 20.80, quantity: 7800, status: 'Pending Peer Match'},
        {tradeId:'88321ksbx220', name: 'Electronic Arts Inc.', ticker: 'EA', spot: 219, boughtAt: 220, quantity: 6550, status: 'Pending Sign'}]

        $scope.stock = _.find($scope.myStocks, function(stock){
            return stock.tradeId = $scope.tradeId;
        });

        $scope.status = 'Matching Peers...';
        $scope.status2 = 'Signing...';
        $scope.status3 = '';
        $scope.broadcastProgress = 30;
        $scope.peers = [];
        $timeout(function(){
            $scope.peers.push({ip:'12.67.200.2', quantity:120});
        }, 2000);

        $timeout(function(){
            $scope.peers.push({ip:'34.112.0.188', quantity:80});
            $scope.status = 'Peers Matched!'
        }, 4000);

        $timeout(function(){
            $scope.status2 = 'Signed!';
            $scope.status3 = 'broadcast';

        }, 6000);

        $interval(function(){
            var addition = Math.random();
            $scope.broadcastProgress + addition >=100? $scope.broadcastProgress = 100:$scope.broadcastProgress = Math.round($scope.broadcastProgress+ addition);
        }, 500);



  });
