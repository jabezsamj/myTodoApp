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
  $routeProvider.when('/home', {templateUrl: 'templates/homePage.html', controller: 'HomePageCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);


myApp.factory('dunamisCache', ['$cacheFactory', function($cacheFactory) {
    return $cacheFactory('dunamisCache');
}]);


myApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);


myApp.config(function($sceDelegateProvider){
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    "http://www.youtube.com/embed/**"
  ]);
})


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

myApp.filter('jsonDate', ['$filter', function ($filter) {
  return function (input, format) {
    //return (input) ? $filter('date')(parseInt(input.substr(6)), format) : '';
    return (input) ? $filter('date')(input, format) : '';

  };
}]);



myApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);


myApp.directive('complexPassword', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(password) {
        var hasUpperCase = /[A-Z]/.test(password);
        var hasLowerCase = /[a-z]/.test(password);
        var hasNumbers = /\d/.test(password);
        var hasNonalphas = /\W/.test(password);
        var characterGroupCount = hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas;

        if ((password.length >= 8) && (characterGroupCount >= 3)) {
          ctrl.$setValidity('complexity', true);
          return password;
        }
        else {
          ctrl.$setValidity('complexity', false);
          return undefined;
        }

      });
    }
  }
});



myApp.controller('iFrames', ['$scope', '$http', '$sce', function($scope, $http, $sce){
console.log("ENTERING LOADING IFRAME");
    $http.post('../json/iframes.json').success(function(data){
    console.log("LOADING SUCCESSFULL");
    $scope.iframes = data;
    for(var i = 0; i < $scope.iframes.length; i++){
        $scope.iframes[i].srcHist = $sce.trustAsResourceUrl($scope.iframes[i].srcHist)
    }


});
console.log("LEAVING LOADING IFRAME");
}]);