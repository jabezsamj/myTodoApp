
myApp.controller('LendingSetupWorkSpaceCtrl', ['$scope', '$location', '$http','$routeParams', '$sce', 'GridDisplayService', 'LendingTypeService', 
    function($scope, $location, $http, $routeParams, $sce, GridDisplayService ,LendingTypeService){

            
        $scope.showLendingTypeList = false;
	$scope.showLendingTypeForm = false;    
      
    
        $scope.setShowLendingTypeList = function(status){
		$scope.showLendingTypeList = status;
	}

        $scope.setShowLendingTypeForm = function(status){
		$scope.showLendingTypeForm = status;
	}


  $scope.loadLendingSetupWorkSpace = function(){
    
$scope.getLendingTypeDetailedList();

  }

  $scope.clearLendingSetupWorkSpace =function(){
        
                $scope.showLendingTypeList = false;
		$scope.showLendingTypeForm = false;
  }


        //LendingType

        $scope.lendingTypeEditMode="";
        $scope.lendingType ={};
        $scope.lendingTypeId ="";
        $scope.lendingTypes ={};

        $scope.setLendingTypeEditMode=function(editMode){
            $scope.lendingTypeEditMode=editMode;
        }


        $scope.setLendingTypeId = function(lendingTypeId){
            $scope.lendingTypeId= lendingTypeId;      
        }

        $scope.setLendingType = function(lendingType){
            $scope.lendingType= lendingType;     
            $scope.setLendingTypeId(lendingType.id);
            if($scope.lendingTypeEditMode==""){
                
            }
        }


        $scope.setLendingTypes = function(lendingTypes){
            $scope.lendingTypes= lendingTypes;      
        }

        $scope.getLendingType = function(id,mode){
            LendingTypeService.getLendingTypeById(id)
            .then(
                function(lendingType){
                    if(lendingType!=undefined){
                        $scope.setLendingType(lendingType);
                        $scope.setupLendingTypeForm(mode);
                    }
                }
            );      
        }

        $scope.getLendingTypeMenu = function(){ //Add Params
            $scope.setShowLendingTypeMenu(false);
            MenuListItemService.getMenuListItemByTag("LendingType", 0)
                     .then(
                        function( lendingTypes ) {
                            if(lendingTypes!=undefined){
                                $scope.lendingTypeMenu = lendingTypes;  
                                console.log(lendingTypes);
                                $scope.setShowLendingTypeMenu(true);              
                            }
                        }
                    );

        }

        $scope.getLendingTypeDetailedList = function(){//Add params
            //$scope.clearLendingTypeWorkSpace();
            GridDisplayService.getGridDisplayByTag("LendingType", 0)//replace with Params
             .then(
                function( lendingTypes ) {
                    if(lendingTypes!=undefined){
                        console.log(lendingTypes);
                        $scope.setLendingTypes(lendingTypes.content);
                        $scope.setShowLendingTypeList(true);  

                    }
                }
            );
        }  


        $scope.setupLendingTypeForm = function(mode){
            $scope.setShowLendingTypeList(false);
            $scope.setShowLendingTypeForm(false);
            //$scope.clearLendingTypeWorkSpace();
            if(mode=="EditLendingType")
                $scope.setShowLendingTypeForm(true);
            if(mode=="LoadLendingTypeWorkspace")
                $scope.setShowLendingTypeWorkSpace(true);
        }


        $scope.setShowAddLendingTypeForm = function(){
            //$scope.clearLendingTypeWorkSpace();
            $scope.setShowLendingTypeList(false);
            $scope.setLendingTypeEditMode(0);
            $scope.setLendingType({});
            $scope.setShowLendingTypeForm(true);
        }

        $scope.setShowEditLendingTypeForm = function(lendingTypeId){
            //$scope.clearLendingTypeWorkSpace();
            $scope.setShowLendingTypeList(false);
            $scope.setLendingTypeEditMode(1);
            $scope.getLendingType(lendingTypeId,"EditLendingType");
            $scope.setShowLendingTypeForm(true);
        }

        $scope.setDisplayLendingTypeDetails = function(lendingType){ //Unload form
            //$scope.clearLendingTypeWorkSpace();
            $scope.getLendingTypeDetailedList();//Add Params
            //$scope.getLendingTypeMenu(); //Add Params
        }

        $scope.hideLendingTypeEditForm = function(lendingTypeId){ //Rename or cimmbien with details
            $scope.setShowLendingTypeForm(false);
            $scope.setShowLendingTypeList(true);
            $scope.setLendingTypeEditMode("");
            //$scope.getLendingTypeMenu(); //Add Params
            $scope.getLendingTypeDetailedList();//Add Params
        }


    
}]);