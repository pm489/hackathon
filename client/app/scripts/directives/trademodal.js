'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:tradeModal
 * @description
 * # tradeModal
 */
angular.module('clientApp')
    .directive('tradeModal', function ($timeout) {
        return {
            templateUrl: 'views/tradeModal.html',
            restrict: 'E',
            replace: true,
            scope: {
                action: '=',
                myStocks:'='
            },
            link: function postLink(scope, element, attrs) {
                scope.$watch('action', function () {
                    if (scope.action.buysell && scope.action.ticker) {
                        scope.selectedStock = _.find(scope.myStocks, function (stock) {
                            return stock.ticker == scope.action.ticker;
                        });

                        $(element).modal('show');
                    }
                }, true);

                scope.confirmTrade = function(){
                    var newTrade = _.clone(scope.selectedStock);
                    newTrade.quantity = scope.action.quantity;
                    newTrade.status = 'Pending Peer Match';
                    newTrade.boughtAt = newTrade.spot;
                    scope.myStocks.push(newTrade);

                    $timeout(function(){
                        scope.myStocks[3].status = 'Pending Sign';
                        scope.myStocks[4].status = 'Executed';
                    }, 1000);

                    $timeout(function(){
                        scope.myStocks[3].status = 'Executed';
                    }, 3000);

                }

            }
        };
    });
