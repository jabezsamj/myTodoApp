myApp.controller('HomePageCtrl', ['$scope', '$location', '$http','$routeParams', '$cookies', '$sce', 'GridDisplayService',
   function($scope, $location, $http, $routeParams, $cookies, $sce, GridDisplayService){


    //Person
    $scope.person = {};
    $scope.personId = "";

    //Workspace Items
      
    $scope.showHomeWorkSpace = false;


    $scope.setShowHomeWorkSpace = function(status){
           $scope.showHomeWorkSpace = status;
        }

    $scope.loadHomeWorkSpace = function(){
         $scope.setShowHomeWorkSpace(true);
       }

    $scope.loadHomeWorkSpace();


    $scope.getPerson = function ()
        {
           GridDisplayService.getGridDisplayByTag("CurrentPerson", 0)//replace with Params
             .then(
                function( person ) {
                    if(person!=undefined){
                        $scope.person = person.content;
                    }
                }
            );
        }

    $scope.getPerson();
    

    $scope.userLogout = function(){
      
      var token = $cookies.get("access_token");

      var req = {
            method: 'POST',
            crossOrigin: true,
            url: BASE_API + "tokens/revoke/" + token
        }

        $http(req).then(function(statusText){
          
           if(statusText.data == 200)
           {
              $.bootstrapGrowl("Logged out successfully");
              $location.url('/login');
           }

        });

    }


}]);
