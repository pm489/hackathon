'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:myCommissionList
 * @description
 * # myCommissionList
 */
angular.module('clientApp')
    .directive('myCommissionList', function () {
        return {
            templateUrl: 'views/myCommissionList.html',
            restrict: 'E',
            replace: true,
            scope:{
                myCommissions:'='
            },
            link: function postLink(scope, element, attrs) {
            }
        };
    });
