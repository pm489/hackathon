'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:stockList
 * @description
 * # stockList
 */
angular.module('clientApp')
    .directive('stockList', function () {
        return {
            templateUrl: 'views/stockList.html',
            restrict: 'AE',
            replace: true,
            scope: {
                stocks: '=',
                selectedStock: '='
            },
            link: function postLink(scope, element, attrs) {
                scope.pickStock = function (ticker) {
                    scope.selectedStock.ticker = ticker;
                }
            }
        };
    });
