'use strict';

/* Controllers */



myApp.controller('LoginCtrl', ['$scope', '$location', '$http','$rootScope', '$httpParamSerializer', '$cookies', '$cookieStore', 'UserService', 'dunamisCache', 'PersonService', 
                      function($scope, $location, $http, $rootScope, $httpParamSerializer, $cookies, $cookieStore, UserService,dunamisCache,PersonService){
  $scope.userName="";
  $scope.password="";
  $scope.authDetails="";
  $scope.registeredUser="";

  // Hide some stuff
  $("#activity").hide();
  $("#projects").hide();
  $("#left-panel").hide();
  $("#rightMenu").hide();
  $("#logout").hide();
  $("#ribbon").hide();
  
   $scope.registerMode = false;
   $scope.showRegForm = false;
   $scope.showLoginForm = true;
   
   $scope.loginSuccess = false;
   $scope.showLoginMessage = false;
   $scope.showRegistrationMessage = false;
   $scope.loginInfo = "";
   $scope.registrationInfo = "";

   // Basic values
   $scope.person = {};
   $scope.personId = "";
   $scope.user = {};
   $scope.userId = "";

  $scope.data = {
        grant_type:"password", 
        username: "", 
        password: "", 
        client_id: "clientapp"
    };
  $scope.encoded = btoa("clientapp:123456");


              

  $scope.userLogin = function(){
    $scope.showLoginMessage = false;
    $scope.loginInfo = "";

    $scope.data.username = $scope.user.login;
    $scope.data.password = $scope.user.password;

    var req = {
            method: 'POST',
            crossOrigin: true,
            url: BASE_API + "/oauth/token",
            headers: {
                "Authorization": "Basic " + $scope.encoded,
                "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            data: $httpParamSerializer($scope.data)
        }

        $http(req).then(function(data){
            //console.log(data);
            $http.defaults.headers.common.Authorization = 
              'Bearer ' + data.data.access_token;
            $cookies.put("access_token", data.data.access_token);
            //console.log( $cookies.get("access_token"));
            //$scope.getPerson();
            $location.url("/home");
            $.bootstrapGrowl("Login successful");
        })
         .catch(function() {
          $scope.showLoginMessage = true;
          $scope.loginInfo = "Username or password is wrong";
         });


          
  }

  




  // Get Person
  $scope.getPerson = function()
  {
       UserService.getPerson()
       .then(
              function( person ) {
              $scope.person = person;
              $scope.personId = $scope.person.id;
              
              $scope.getReader();


            });
  }



   $scope.userRegister = function(person, user){
          
          $scope.showRegistrationMessage = false;
          user.person = person;
          
          UserService.createNewUser(user)
          .then(
              function( status ) {
                  if(status == 200)
                  {
                    $scope.setShowLogin();
                    $.bootstrapGrowl("Registration successful");
                  }
                 else{
                    $scope.showRegistrationMessage = true;
                    $scope.registrationInfo = "Registration Unsuccessful";
                  }
              })
           .catch(function() {
             $scope.showRegistrationMessage = true;
             $scope.registrationInfo = "Registration Unsuccessful";
          });

    }


 

    $scope.setShowLogin = function()
    {
        $scope.user = {};
        $scope.person = {};
        $scope.showLoginForm = true;
        $scope.showRegForm = false;
    }


    $scope.setShowRegister = function()
    {
        $scope.user = {};
        $scope.person = {};
        $scope.showRegForm = true;
        $scope.showLoginForm = false;
    }


}]);