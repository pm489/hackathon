'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:myStockList
 * @description
 * # myStockList
 */
angular.module('clientApp')
    .directive('myStockList', function ($location) {
        return {
            templateUrl: 'views/myStockList.html',
            restrict: 'E',
            replace: true,
            scope:{
                myStocks:'='
            },
            link: function postLink(scope, element, attrs) {
                scope.calProfit = function(stock){
                    return  Math.round((stock.spot - stock.boughtAt)*stock.quantity*100)/100;
                };

                scope.doTrade = function(ticker) {
                    $location.path('/portfolio/sell/'+ticker);
                }

            }
        };
    });
