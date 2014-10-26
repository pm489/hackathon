var app = angular.module('myApp',[]);

app.controller('mainController',['$scope',function(){
    $scope.loggedIn=false;
}])

app.directive('navBar', function(){
      return{
        replace: 'true',
        templateUrl: '../html/nav-bar.html'
      }
    });