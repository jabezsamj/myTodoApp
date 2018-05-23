
myApp.controller('SetupPageCtrl', ['$scope', '$location', '$http','$routeParams', '$sce', 
   function($scope, $location, $http, $routeParams, $sce){
      //Parent Items
   	$scope.showSetupRightNav = true;
   	$scope.showSetupLeftNav = true;
   	$scope.showWorkspace = true;

    //Workspace Items
      
    $scope.showBookCategorySetupWorkSpace = false;$scope.showLendingSetupWorkSpace = false;$scope.showOrgSetupWorkSpace = false;$scope.showBookSetupWorkSpace = false;$scope.showMembershipTypeWorkSpace = false;


      //show/ hide parent items
   	$scope.setShowSetupRightNav = function(status){
	   	$scope.showSetupRightNav = status;
   	}

   	$scope.setShowSetupLeftNav = function(status){
	   	$scope.showSetupLeftNav = status;
   	}

   	$scope.setShowWorkspace = function(status){
	   	$scope.showWorkspace = status;
   	}

      //show/ hide WS items

      
$scope.setShowBookCategorySetupWorkSpace = function(status){
           $scope.showBookCategorySetupWorkSpace = status;
        }
$scope.setShowLendingSetupWorkSpace = function(status){
           $scope.showLendingSetupWorkSpace = status;
        }
$scope.setShowOrgSetupWorkSpace = function(status){
           $scope.showOrgSetupWorkSpace = status;
        }
$scope.setShowBookSetupWorkSpace = function(status){
           $scope.showBookSetupWorkSpace = status;
        }
$scope.setShowMembershipTypeWorkSpace = function(status){
           $scope.showMembershipTypeWorkSpace = status;
        }
$scope.setShowLawyerWorkSpace = function(status)
       {
  $scope.showLawyerWorkSpace = status;
        }


        $scope.clearWorkSpace = function(){
            $scope.showBookCategorySetupWorkSpace= false;
            $scope.showLendingSetupWorkSpace= false;
            $scope.showOrgSetupWorkSpace= false;
            $scope.showBookSetupWorkSpace= false;
            $scope.showMembershipTypeWorkSpace= false;
            $scope.showLawyerWorkSpace = false;
        }

      	

       $scope.loadBookCategorySetupWorkSpace = function(){
         $scope.clearWorkSpace();
         $scope.setShowBookCategorySetupWorkSpace(true);
       }	

       $scope.loadLendingSetupWorkSpace = function(){
         $scope.clearWorkSpace();
         $scope.setShowLendingSetupWorkSpace(true);
       }	

       $scope.loadOrgSetupWorkSpace = function(){
         $scope.clearWorkSpace();
         $scope.setShowOrgSetupWorkSpace(true);
       }	

       $scope.loadBookSetupWorkSpace = function(){
         $scope.clearWorkSpace();
         $scope.setShowBookSetupWorkSpace(true);
       }	

       $scope.loadMembershipTypeWorkSpace = function(){

         $scope.clearWorkSpace();
         $scope.setShowMembershipTypeWorkSpace(true);
       }

       $scope.loadLawyerWorkSpace = function(){
        
         $scope.clearWorkSpace();
         $scope.setShowLawyerWorkSpace(true);
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
