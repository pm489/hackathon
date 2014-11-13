var app = angular.module('myApp',['ngCookies']);


app.controller('mainController',['$scope','$cookies','$cookieStore',
function(sc,cookies,cookieStore){

    sc.loggedIn = function(){
      var loggedIn =  cookies.loggedIn;
      if(loggedIn){
            return true;
      }
        return false;
    }

    sc.logIn = function(){
        cookies.loggedIn=true;
    }
}]);

app.controller('menuController',['$scope', function(innerSc){
    innerSc.isActive = function(path){
        if ($location.path().substr(0, path.length) == path) {
          return true;
        } else {
          return false;
        }
    }
}])

app.directive('navBar', function(){
      return{
        replace: 'true',
        link: function(scope, element, attrs){
            scope.getNavBarUrl = function(){
                return '../html/nav-bar-'+ scope.loggedIn() +'.html';
            }
        },
        template: '<div ng-include="getNavBarUrl()"></div>'
      }
    });

app.directive('sideMenu',function(){
    return{
        replace: 'true',
        templateUrl: '../html/side-menu.html'
    }
})