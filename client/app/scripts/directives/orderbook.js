'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:orderBook
 * @description
 * # orderBook
 */
angular.module('clientApp')
    .directive('orderBook', function () {
        return {
            templateUrl: 'views/orderBook.html',
            restrict: 'E',
            replace: true,
            scope: {
                selectedStock: '='
            },
            link: function postLink(scope, element, attrs) {

                scope.$watch('selectedStock', function(){
                    var results = [];
                    var randomBase = Math.random() * 10000;
                    for (var i = 0; i < 5; i++) {
                        var spot = Math.round(randomBase + Math.random()*1000)/100;
                        var bidSpot = Math.round((spot-0.02)*100)/100;
                        results[i] = {
                            spot: Math.round(randomBase + Math.random()*1000)/100,
                            quantity: Math.floor(Math.random() * 1000),
                            bidSpot: bidSpot,
                            bidQuantity: Math.floor(Math.random() * 1000)
                        };
                    }

                    scope.randomOffers =  _.sortBy(results, function (item) {
                        return item.spot;
                    });
                });
            }
        };
    });
