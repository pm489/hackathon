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
}])

app.directive('navBar', function(){
      return{
        replace: 'true',
        templateUrl: '../html/nav-bar.html'
      }
    });