'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:myStockList
 * @description
 * # myStockList
 */
angular.module('clientApp')
    .directive('myStockList', function () {
        return {
            templateUrl: 'views/myStockList.html',
            restrict: 'E',
            replace: true,
            scope:{
                myStocks:'='
            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });
