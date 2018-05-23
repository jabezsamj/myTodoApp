
myApp.controller('LendingPageCtrl', ['$scope', '$location', '$http','$routeParams', '$sce', 
   function($scope, $location, $http, $routeParams, $sce){
      //Parent Items
   	$scope.showLendingRightNav = true;
   	$scope.showLendingLeftNav = true;
   	$scope.showWorkspace = true;

    //Workspace Items
      
    $scope.showLendingWorkSpace = false;


      //show/ hide parent items
   	$scope.setShowLendingRightNav = function(status){
	   	$scope.showLendingRightNav = status;
   	}

   	$scope.setShowLendingLeftNav = function(status){
	   	$scope.showLendingLeftNav = status;
   	}

   	$scope.setShowWorkspace = function(status){
	   	$scope.showWorkspace = status;
   	}

      //show/ hide WS items

      
$scope.setShowLendingWorkSpace = function(status){
           $scope.showLendingWorkSpace = status;
        }

        $scope.clearWorkSpace = function(){
            $scope.showLendingWorkSpace= false;
        }

      	

       $scope.loadLendingWorkSpace = function(){
         $scope.clearWorkSpace();
         $scope.setShowLendingWorkSpace(true);
       }

   	//Main Resources

    /*
      $scope.<WorkSpaceBaseEntityNameLowerCase> = {};

      $scope.set<WorkSpaceBaseEntityNameUpperCase>=function(<WorkSpaceBaseEntityNameLowerCase>){
         $scope.<WorkSpaceBaseEntityNameLowerCase> = <WorkSpaceBaseEntityNameLowerCase>;   
      }

      $scope.get<WorkSpaceBaseEntityNameUpperCase> = function(){
         <WorkSpaceBaseEntityNameUpperCase>Service.get<WorkSpaceBaseEntityNameUpperCase>ById($routeParams.param)
         .then(
            function(<WorkSpaceBaseEntityNameLowerCase>){
               if(<WorkSpaceBaseEntityNameLowerCase>!=undefined){
                  $scope.set<WorkSpaceBaseEntityNameUpperCase>(<WorkSpaceBaseEntityNameLowerCase>);
                  $scope.setShow<WorkSpaceBaseEntityNameUpperCase>LeftNav(true);
               }
            }
         );
      }

      //Load
      $scope.get<WorkSpaceBaseEntityNameUpperCase>();


      */


}]);
