'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('PortfolioCtrl', function ($scope, $rootScope) {
        $rootScope.page = 'portfolio';
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
