'use strict';

/* Controllers */



myApp.controller('LoginCtrl', ['$scope', '$location', '$http','$rootScope', '$httpParamSerializer', '$cookies', '$cookieStore', 'UserService', 'dunamisCache', 'PersonService',
											function($scope, $location, $http, $rootScope, $httpParamSerializer, $cookies, $cookieStore, UserService,dunamisCache,PersonService){
	$scope.userName="";
	$scope.password="";
  $scope.authDetails="";
  $scope.registeredUser="";
  $scope.showPersonForm = false;
  $scope.tokenId = "";
  
  // Hide some stuff
  $("#activity").hide();
	$("#projects").hide();
	$("#left-panel").hide();
	$("#rightMenu").hide();
	$("#logout").hide();
	$("#ribbon").hide();

  
   $scope.registerMode = false;
   $scope.showLoginForm = true;
   $scope.person = {};
   $scope.user = {};

  $scope.confirmPassword ="";
  $scope.data = {
        grant_type:"password", 
        username: "", 
        password: "", 
        client_id: "clientapp"
    };
  $scope.logout_data = {
        tokenId:""
    };
  $scope.encoded = btoa("clientapp:123456");



  $scope.loadUserForm = function(user,isEdit){
  if (isEdit==1){
      $scope.buttonTextUser = "Update";
      $scope.user = user
  }
  else{
      $scope.buttonTextUser = "Add";
      //$scope.user = {} ;

  }


  $scope.hideUserForm = function(){
        $scope.showUserForm= false;
        $scope.showUserList= true;
    }

  $scope.registerPersion = function(person){
    $scope.person = person;
    $scope.showPersonForm = true;
    $scope.showLoginForm = false;
  }

  $scope.savePerson = function(){
      PersonService.updatePerson($scope.person)
      .then(
          function( person ) {
              if(person!=undefined){
                alert("Updated, Pls Login");
                $scope.showPersonForm = false;
                $scope.registerMode = false;
                $scope.showLoginForm = true;
              }
            }
      );
  }

  $scope.saveUser = function(){
        if ($scope.buttonTextUser=="Add")
            UserService.createUser($scope.user)
                .then(
                    function( user ) {
                        if(user!=undefined){
                            $scope.hideUserForm();
                            alert("User Added!");
                            if($scope.registerMode==true){
                              $scope.registerPersion(user.person);
                            }
                        }else{
                        }
                    }
                );
        else{
            UserService.updateUser(user)
                .then(
                    function( user ) {
                        if(user!=undefined){
                            $scope.user = {};
                            $scope.hideUserForm();
                            alert("User Updated!");
                        }else{
                        }
                    }
                );
            }
    }


  $scope.showUserForm= true;
  $scope.showUserList= false;
 }


	$scope.userLogin = function(){
    $scope.data.username = $scope.user.login;
    $scope.data.password = $scope.user.password;

    var req = {
            method: 'POST',
            crossOrigin: true,
            url: "http://localhost:8080/oauth/token",
            //url: "http://lawbooks.ap-southeast-1.elasticbeanstalk.com/oauth/token",
            headers: {
                "Authorization": "Basic " + $scope.encoded,
                "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            data: $httpParamSerializer($scope.data)
        }

        $http(req).then(function(data){
          console.log(data);
            $http.defaults.headers.common.Authorization = 
              'Bearer ' + data.data.access_token;
            $cookies.put("access_token", data.data.access_token);
            $scope.tokenId = data.data.access_token;
            $location.url("/Lending");

            //window.location.href="index";
        });   
  }



  $scope.userLogout = function(){
      
      var token = $cookies.get("access_token");

      var req = {
            method: 'POST',
            crossOrigin: true,
            //url: "http://localhost:8080/tokens/revoke/" + token
            url: "http://lawbooks.ap-southeast-1.elasticbeanstalk.com/tokens/revoke/" + token

        }
       

        $http(req).then(function(statusText){
          
           alert(statusText.data);
      


            //window.location.href="index";
        });


     /* UserService.logout($cookies.get('access_token'))
            .then(
                function( data ) {
                    alert("atleast here ");
                    if(data!=undefined){
                       alert("Logout");  
                       alert(data);   
                    }
                }
            );*/
   
   /* var req = {
            method: 'POST',
            crossOrigin: true,
            url: "http://localhost:8080/tokens/revoke",
            headers: {
                "Authorization": "Basic " + $scope.encoded,
                "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            data: $httpParamSerializer($scope.tokenId)
        }



    $http(req).then(function(output){
          console
          alert("Here");
          //console.log(data);
          alert("Logout successful");
            //window.location.href="index";
        }); */

  }

  $scope.register = function(){
      $scope.loadUserForm();
      $scope.registerMode = true;
    }

    $scope.setLogin = function(){
      $scope.registerMode = false;
    }


/*
  $scope.data.username = $scope.userName;
        $scope.data.password = $scope.password;

        var req = {
            method: 'POST',
            crossOrigin: true,
            url: BASE_API+ "oauth/token",
            headers: {
                "Authorization": "Basic " + $scope.encoded,
                "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            data: $httpParamSerializer($scope.data)
        }
        $http(req).then(function(data){
            $http.defaults.headers.common.Authorization = 
              'Bearer ' + data.data.access_token;
            $cookies.put("access_token_client", data.data.access_token);
            console.log( $cookies.get("access_token_client"));
            console.log(data.data.access_token);
            UserService.getPerson()
                .then(  
                function(person){
                    if(person!=undefined){
		     $("#left-panel").show();
                      $location.url("/home")
                    }
                });    

                });
   
  }             
        
*/

}]);
