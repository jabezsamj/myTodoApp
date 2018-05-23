
myApp.controller('LawyerWorkSpaceCtrl', ['$scope', '$location', '$http','$routeParams', '$sce', 'GridDisplayService', 'LawyerService', 
    function($scope, $location, $http, $routeParams, $sce, GridDisplayService ,LawyerService){

            
        $scope.showLawyerList = false;
    $scope.showLawyerForm = false;    
      
    
        $scope.setShowLawyerList = function(status){
        $scope.showLawyerList = status;
    }

        $scope.setShowLawyerForm = function(status){
        $scope.showLawyerForm = status;
    }


  $scope.loadLawyerWorkSpace = function(){
    
$scope.getLawyerDetailedList();

  }

  $scope.clearLawyerWorkSpace =function(){
        
                $scope.showLawyerList = false;
        $scope.showLawyerForm = false;
  }


        //Lawyer

        $scope.lawyerEditMode="";
        $scope.lawyer ={};
        $scope.lawyerId ="";
        $scope.lawyers ={};

        $scope.setLawyerEditMode=function(editMode){
            $scope.lawyerEditMode=editMode;
        }


        $scope.setLawyerId = function(lawyerId){
            $scope.lawyerId= lawyerId;      
        }

        $scope.setLawyer = function(lawyer){
            $scope.lawyer= lawyer;     
            $scope.setLawyerId(lawyer.id);
            if($scope.lawyerEditMode==""){
                //Set the next Level Item Detail Liest
            }
        }


        $scope.setLawyers = function(lawyers){
            $scope.lawyers= lawyers;
                  
        }

        $scope.getLawyer = function(id,mode){
            LawyerService.getLawyerById(id)
            .then(
                function(lawyer){
                    if(lawyer!=undefined){
                        $scope.setLawyer(lawyer);
                        $scope.setupLawyerForm(mode);
                    }
                }
            );      
        }

        $scope.getLawyerMenu = function(){ //Add Params
            $scope.setShowLawyerMenu(false);
            MenuListItemService.getMenuListItemByTag("Lawyer", 0)
                     .then(
                        function( lawyers ) {
                            if(lawyers!=undefined){
                                $scope.lawyerMenu = lawyers;  
                                console.log(lawyers);
                                $scope.setShowLawyerMenu(true);              
                            }
                        }
                    );

        }

        $scope.getLawyerDetailedList = function(){//Add params
            //$scope.clearLawyerWorkSpace();

            GridDisplayService.getGridDisplayByTag("Lawyer", 0)//replace with Params
             .then(
                function( lawyers ) {
                    if(lawyers!=undefined){
                        console.log(lawyers);
                        $scope.setLawyers(lawyers.content);
                        $scope.setShowLawyerList(true);  

                    }
                }
            );
        }  


        $scope.setupLawyerForm = function(mode){
            $scope.setShowLawyerList(false);
            $scope.setShowLawyerForm(false);
            //$scope.clearLawyerWorkSpace();
            if(mode=="EditLawyer")
                $scope.setShowLawyerForm(true);
            if(mode=="LoadLawyerWorkspace")
                $scope.setShowLawyerWorkSpace(true);
        }


        $scope.setShowAddLawyerForm = function(){
            //$scope.clearLawyerWorkSpace();
            $scope.setShowLawyerList(false);
            $scope.setLawyerEditMode(0);
            $scope.setLawyer({});
            $scope.setShowLawyerForm(true);
        }

        $scope.setShowEditLawyerForm = function(lawyerId){
            //$scope.clearLawyerWorkSpace();
            $scope.setShowLawyerList(false);
            $scope.setLawyerEditMode(1);
            $scope.getLawyer(lawyerId,"EditLawyer");
            $scope.setShowLawyerForm(true);
        }

        $scope.setDisplayLawyerDetails = function(lawyer){ //Unload form
            //$scope.clearLawyerWorkSpace();
            $scope.getLawyerDetailedList();//Add Params
            //$scope.getLawyerMenu(); //Add Params
        }

        $scope.hideLawyerEditForm = function(lawyerId){ //Rename or cimmbien with details
            $scope.setShowLawyerForm(false);
            $scope.setShowLawyerList(true);
            $scope.setLawyerEditMode("");
            //$scope.getLawyerMenu(); //Add Params
            $scope.getLawyerDetailedList();//Add Params
        }


    
}]);