
myApp.controller('MembershipTypeWorkSpaceCtrl', ['$scope', '$location', '$http','$routeParams', '$sce', 'GridDisplayService', 'MembershipTypeService', 
    function($scope, $location, $http, $routeParams, $sce, GridDisplayService ,MembershipTypeService){

            
        $scope.showMembershipTypeList = false;
	$scope.showMembershipTypeForm = false;    
      
    
        $scope.setShowMembershipTypeList = function(status){
		$scope.showMembershipTypeList = status;
	}

        $scope.setShowMembershipTypeForm = function(status){
		$scope.showMembershipTypeForm = status;
	}


  $scope.loadMembershipTypeWorkSpace = function(){
    
$scope.getMembershipTypeDetailedList();

  }

  $scope.clearMembershipTypeWorkSpace =function(){
        
                $scope.showMembershipTypeList = false;
		$scope.showMembershipTypeForm = false;
  }


        //MembershipType

        $scope.membershipTypeEditMode="";
        $scope.membershipType ={};
        $scope.membershipTypeId ="";
        $scope.membershipTypes ={};

        $scope.setMembershipTypeEditMode=function(editMode){
            $scope.membershipTypeEditMode=editMode;
        }


        $scope.setMembershipTypeId = function(membershipTypeId){
            $scope.membershipTypeId= membershipTypeId;      
        }

        $scope.setMembershipType = function(membershipType){
            $scope.membershipType= membershipType;     
            $scope.setMembershipTypeId(membershipType.id);
            if($scope.membershipTypeEditMode==""){
                //Set the next Level Item Detail Liest
            }
        }


        $scope.setMembershipTypes = function(membershipTypes){
            $scope.membershipTypes= membershipTypes;      
        }

        $scope.getMembershipType = function(id,mode){
            MembershipTypeService.getMembershipTypeById(id)
            .then(
                function(membershipType){
                    if(membershipType!=undefined){
                        $scope.setMembershipType(membershipType);
                        $scope.setupMembershipTypeForm(mode);
                    }
                }
            );      
        }

        $scope.getMembershipTypeMenu = function(){ //Add Params
            $scope.setShowMembershipTypeMenu(false);
            MenuListItemService.getMenuListItemByTag("MembershipType", 0)
                     .then(
                        function( membershipTypes ) {
                            if(membershipTypes!=undefined){
                                $scope.membershipTypeMenu = membershipTypes;  
                                console.log(membershipTypes);
                                $scope.setShowMembershipTypeMenu(true);              
                            }
                        }
                    );

        }

        $scope.getMembershipTypeDetailedList = function(){//Add params
            //$scope.clearMembershipTypeWorkSpace();
            GridDisplayService.getGridDisplayByTag("MembershipType", 0)//replace with Params
             .then(
                function( membershipTypes ) {
                    if(membershipTypes!=undefined){
                        console.log(membershipTypes);
                        $scope.setMembershipTypes(membershipTypes.content);
                        $scope.setShowMembershipTypeList(true);  

                    }
                }
            );
        }  


        $scope.setupMembershipTypeForm = function(mode){
            $scope.setShowMembershipTypeList(false);
            $scope.setShowMembershipTypeForm(false);
            //$scope.clearMembershipTypeWorkSpace();
            if(mode=="EditMembershipType")
                $scope.setShowMembershipTypeForm(true);
            if(mode=="LoadMembershipTypeWorkspace")
                $scope.setShowMembershipTypeWorkSpace(true);
        }


        $scope.setShowAddMembershipTypeForm = function(){
            //$scope.clearMembershipTypeWorkSpace();
            $scope.setShowMembershipTypeList(false);
            $scope.setMembershipTypeEditMode(0);
            $scope.setMembershipType({});
            $scope.setShowMembershipTypeForm(true);
        }

        $scope.setShowEditMembershipTypeForm = function(membershipTypeId){
            //$scope.clearMembershipTypeWorkSpace();
            $scope.setShowMembershipTypeList(false);
            $scope.setMembershipTypeEditMode(1);
            $scope.getMembershipType(membershipTypeId,"EditMembershipType");
            $scope.setShowMembershipTypeForm(true);
        }

        $scope.setDisplayMembershipTypeDetails = function(membershipType){ //Unload form
            //$scope.clearMembershipTypeWorkSpace();
            $scope.getMembershipTypeDetailedList();//Add Params
            //$scope.getMembershipTypeMenu(); //Add Params
        }

        $scope.hideMembershipTypeEditForm = function(membershipTypeId){ //Rename or cimmbien with details
            $scope.setShowMembershipTypeForm(false);
            $scope.setShowMembershipTypeList(true);
            $scope.setMembershipTypeEditMode("");
            //$scope.getMembershipTypeMenu(); //Add Params
            $scope.getMembershipTypeDetailedList();//Add Params
        }


    
}]);