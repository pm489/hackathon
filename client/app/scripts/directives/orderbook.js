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
            }
        };
    });
