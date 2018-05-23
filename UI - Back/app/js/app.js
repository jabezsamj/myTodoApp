'use strict';


// Adding isNumber function to String class
String.prototype.isNumber = function(){return /^\d+$/.test(this);}

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'once',
  'ngCookies',
  'angularUtils.directives.dirPagination',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]);


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'templates/login.html', controller: 'LoginCtrl'});
  $routeProvider.when('/home', {templateUrl: 'templates/homePage.html', controller: 'HomePageCtrl'});
  $routeProvider.when('/Setup', {templateUrl: 'templates/Setup/SetupPage.html', controller: 'SetupPageCtrl'});
  $routeProvider.when('/Lending', {templateUrl: 'templates/Lending/LendingPage.html', controller: 'LendingPageCtrl'});
  
  $routeProvider.otherwise({redirectTo: '/login'});
}]);


myApp.factory('dunamisCache', ['$cacheFactory', function($cacheFactory) {
    return $cacheFactory('dunamisCache');
}]);


myApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);







myApp = angular.module('myApp.controllers', ['ngSanitize']);

myApp.run(['$rootScope', function($rootScope){
    $rootScope.authDetails = {};
    $rootScope.userId = "";
    
}]);

myApp.factory('myInterceptor', ['$log','$rootScope','$cookies', '$q', function($log,$rootScope,$cookies,$q) {
  return{
    'request': function(config) {
        if(!(config.url).indexOf("oauth/token") > -1 || !(config.url).indexOf("DunamisUser") > -1){
            //console.log((config.url).indexOf(".html"));
            config.url= config.url +  "?access_token=" + $cookies.get("access_token");
           //console.log(config.url);
  }
      return config;
    }
  };
}]);

myApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('myInterceptor');
}]);


