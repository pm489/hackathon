var app = angular.module('myApp',[]);

app.directive('navBar', function(){
      return{
        replace: 'true',
        templateUrl: '../html/nav-bar.html'
      }
    });