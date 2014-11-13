'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:stockList
 * @description
 * # stockList
 */
angular.module('clientApp')
    .directive('stockList', ['$timeout',function ($timeout) {
        return {
            templateUrl: 'views/stockList.html',
            restrict: 'AE',
            replace: true,
            scope: {
                stocks: '=',
                selectedStock: '='
            },
            link: function postLink(scope, element, attrs) {
                scope.pickStock = function (index) {
                    scope.selectedStock = {};
                    scope.selectedStock.loading = true;
                    $timeout(function(){
                        scope.selectedStock.loading = false;
                        scope.selectedStock = scope.stocks[index];
                    }, 1000);

                }
            }
        };
    }]);
