
myApp.controller('OrgSetupWorkSpaceCtrl', ['$scope', '$location', '$http','$routeParams', '$sce', 'GridDisplayService', 'FirmService', 'DepartmentService', 'LawyerService', 'BranchService', 
    function($scope, $location, $http, $routeParams, $sce, GridDisplayService ,FirmService,DepartmentService,LawyerService,BranchService){

            
        $scope.showFirmList = false;
	$scope.showFirmForm = false;        
        $scope.showDepartmentList = false;
	$scope.showDepartmentForm = false;        
        $scope.showLawyerList = false;
	$scope.showLawyerForm = false;        
        $scope.showBranchList = false;
	$scope.showBranchForm = false;    
      
    
        $scope.setShowFirmList = function(status){
		$scope.showFirmList = status;
	}

        $scope.setShowFirmForm = function(status){
		$scope.showFirmForm = status;
	}

        $scope.setShowDepartmentList = function(status){
		$scope.showDepartmentList = status;
	}

        $scope.setShowDepartmentForm = function(status){
		$scope.showDepartmentForm = status;
	}

        $scope.setShowLawyerList = function(status){
		$scope.showLawyerList = status;
	}

        $scope.setShowLawyerForm = function(status){
		$scope.showLawyerForm = status;
	}

        $scope.setShowBranchList = function(status){
		$scope.showBranchList = status;
	}

        $scope.setShowBranchForm = function(status){
		$scope.showBranchForm = status;
	}


  $scope.loadOrgSetupWorkSpace = function(){
    
$scope.getFirmDetailedList();


  }

  $scope.clearOrgSetupWorkSpace =function(){
        
                $scope.showFirmList = false;
		$scope.showFirmForm = false;
                $scope.showDepartmentList = false;
		$scope.showDepartmentForm = false;
                $scope.showLawyerList = false;
		$scope.showLawyerForm = false;
                $scope.showBranchList = false;
		$scope.showBranchForm = false;
  }


        //Firm

        $scope.firmEditMode="";
        $scope.firm ={};
        $scope.firmId ="";
        $scope.firms ={};

        $scope.setFirmEditMode=function(editMode){
            $scope.firmEditMode=editMode;
        }


        $scope.setFirmId = function(firmId){
            $scope.firmId= firmId;      
        }

        $scope.setFirm = function(firm){
            $scope.firm= firm;     
            $scope.setFirmId(firm.id);
            if($scope.firmEditMode==""){
             
            }
        }

        $scope.setFirmGetBranch = function(firm){
            $scope.firm= firm;     
            $scope.setFirmId(firm.id);
            if($scope.firmEditMode==""){
                $scope.getDepartmentDetailedList();
                $scope.getBranchDetailedList();
            }
        }


        $scope.setFirms = function(firms){
            $scope.firms= firms;      
        }

        $scope.getFirm = function(id,mode){
            FirmService.getFirmById(id)
            .then(
                function(firm){
                    if(firm!=undefined){
                        $scope.setFirm(firm);
                        $scope.setupFirmForm(mode);
                    }
                }
            );      
        }

        $scope.getFirmMenu = function(){ //Add Params
            $scope.setShowFirmMenu(false);
            MenuListItemService.getMenuListItemByTag("Firm", 0)
                     .then(
                        function( firms ) {
                            if(firms!=undefined){
                                $scope.firmMenu = firms;  
                                console.log(firms);
                                $scope.setShowFirmMenu(true);              
                            }
                        }
                    );

        }

        $scope.getFirmDetailedList = function(){//Add params
            //$scope.clearFirmWorkSpace();
            GridDisplayService.getGridDisplayByTag("Firm", 0)//replace with Params
             .then(
                function( firms ) {
                    if(firms!=undefined){
                        console.log(firms);
                        $scope.setFirms(firms.content);
                        $scope.setShowFirmList(true);  

                    }
                }
            );
        }  


        $scope.setupFirmForm = function(mode){
            $scope.setShowFirmList(false);
            $scope.setShowFirmForm(false);
            //$scope.clearFirmWorkSpace();
            if(mode=="EditFirm")
                $scope.setShowFirmForm(true);
            if(mode=="LoadFirmWorkspace")
                $scope.setShowFirmWorkSpace(true);
        }


        $scope.setShowAddFirmForm = function(){
            //$scope.clearFirmWorkSpace();\
            $scope.hideBranch();
            $scope.hideDepartment();
            $scope.hideLawyer();
            
            $scope.setShowFirmList(false);
            $scope.setFirmEditMode(0);
            $scope.setFirm({});
            $scope.setShowFirmForm(true);
        }

        $scope.setShowEditFirmForm = function(firmId){
            //$scope.clearFirmWorkSpace();
            $scope.hideBranch();
            $scope.hideDepartment();
            $scope.hideLawyer();
            $scope.setShowFirmList(false);
            $scope.setFirmEditMode(1);
            $scope.getFirm(firmId,"EditFirm");
            $scope.setShowFirmForm(true);
        }

        $scope.setDisplayFirmDetails = function(firm){ //Unload form
            //$scope.clearFirmWorkSpace();
            $scope.getFirmDetailedList();//Add Params
            //$scope.getFirmMenu(); //Add Params
        }

        $scope.hideFirmEditForm = function(firmId){ //Rename or cimmbien with details
            $scope.setShowFirmForm(false);
            $scope.setShowFirmList(true);
            $scope.setFirmEditMode("");
            //$scope.getFirmMenu(); //Add Params
            $scope.getFirmDetailedList();//Add Params
        }

        $scope.hideFirm = function()
        {
            alert("Called");
            $scope.hideLawyer();
            $scope.hideBranch();
            $scope.hideDepartment();
            $scope.setShowFirmForm(false);
            $scope.setShowFirmList(false);
        }
    //Department

        $scope.departmentEditMode="";
        $scope.department ={};
        $scope.departmentId ="";
        $scope.departments ={};

        $scope.setDepartmentEditMode=function(editMode){
            $scope.departmentEditMode=editMode;
        }


        $scope.setDepartmentId = function(departmentId){
            $scope.departmentId= departmentId;      
        }

        $scope.setDepartment = function(department){
            $scope.department= department;     
            $scope.setDepartmentId(department.id);
            if($scope.departmentEditMode==""){
                //Set the next Level Item Detail Liest
            }
        }


        $scope.setDepartments = function(departments){
            $scope.departments= departments;      
        }

        $scope.getDepartment = function(id,mode){
            DepartmentService.getDepartmentById(id)
            .then(
                function(department){
                    if(department!=undefined){
                        $scope.setDepartment(department);
                        $scope.setupDepartmentForm(mode);
                    }
                }
            );      
        }

        $scope.getDepartmentMenu = function(){ //Add Params
            $scope.setShowDepartmentMenu(false);
            MenuListItemService.getMenuListItemByTag("Department", 0)
                     .then(
                        function( departments ) {
                            if(departments!=undefined){
                                $scope.departmentMenu = departments;  
                                console.log(departments);
                                $scope.setShowDepartmentMenu(true);              
                            }
                        }
                    );

        }

        $scope.getDepartmentDetailedList = function(){//Add params
            //$scope.clearDepartmentWorkSpace();
            GridDisplayService.getGridDisplayByTag("Department", $scope.firmId)//replace with Params
             .then(
                function( departments ) {
                    if(departments!=undefined){
                        console.log(departments);
                        $scope.setDepartments(departments.content);
                        $scope.setShowDepartmentList(true);  

                    }
                }
            );
        }  


        $scope.setupDepartmentForm = function(mode){
            $scope.setShowDepartmentList(false);
            $scope.setShowDepartmentForm(false);
            //$scope.clearDepartmentWorkSpace();
            if(mode=="EditDepartment")
                $scope.setShowDepartmentForm(true);
            if(mode=="LoadDepartmentWorkspace")
                $scope.setShowDepartmentWorkSpace(true);
        }


        $scope.setShowAddDepartmentForm = function(){
            //$scope.clearDepartmentWorkSpace();
            $scope.setShowDepartmentList(false);
            $scope.setDepartmentEditMode(0);
            $scope.setDepartment({});
            $scope.setShowDepartmentForm(true);
        }

        $scope.setShowEditDepartmentForm = function(departmentId){
            //$scope.clearDepartmentWorkSpace();
            $scope.setShowDepartmentList(false);
            $scope.setDepartmentEditMode(1);
            $scope.getDepartment(departmentId,"EditDepartment");
            $scope.setShowDepartmentForm(true);
        }

        $scope.setDisplayDepartmentDetails = function(department){ //Unload form
            //$scope.clearDepartmentWorkSpace();
            $scope.getDepartmentDetailedList();//Add Params
            //$scope.getDepartmentMenu(); //Add Params
        }

        $scope.hideDepartmentEditForm = function(departmentId){ //Rename or cimmbien with details
            $scope.setShowDepartmentForm(false);
            $scope.setShowDepartmentList(true);
            $scope.setDepartmentEditMode("");
            //$scope.getDepartmentMenu(); //Add Params
            $scope.getDepartmentDetailedList();//Add Params
        }

        $scope.hideDepartment = function()
        {
            $scope.setShowDepartmentForm(false);
            $scope.setShowDepartmentList(false);
        }

    //Branch

        $scope.branchEditMode="";
        $scope.branch ={};
        $scope.branchId ="";
        $scope.branchs ={};

        $scope.setBranchEditMode=function(editMode){
            $scope.branchEditMode=editMode;
        }


        $scope.setBranchId = function(branchId){
            $scope.branchId= branchId;      
        }

        $scope.setBranch = function(branch){
            $scope.branch= branch;     
            $scope.setBranchId(branch.id);
            if($scope.branchEditMode==""){
                 //
            }
        }

        $scope.setBranchGetLawyer = function(branch){
            $scope.branch= branch;     
            $scope.setBranchId(branch.id);
            if($scope.branchEditMode==""){
                 $scope.getLawyerDetailedList();
            }
        }


        $scope.setBranchs = function(branchs){
            $scope.branchs= branchs;      
        }

        $scope.getBranch = function(id,mode){
            BranchService.getBranchById(id)
            .then(
                function(branch){
                    if(branch!=undefined){
                        $scope.setBranch(branch);
                        $scope.setupBranchForm(mode);
                    }
                }
            );      
        }

        $scope.getBranchMenu = function(){ //Add Params
            $scope.setShowBranchMenu(false);
            MenuListItemService.getMenuListItemByTag("Branch", 0)
                     .then(
                        function( branchs ) {
                            if(branchs!=undefined){
                                $scope.branchMenu = branchs;  
                                console.log(branchs);
                                $scope.setShowBranchMenu(true);              
                            }
                        }
                    );

        }

        $scope.getBranchDetailedList = function(){//Add params
            //$scope.clearBranchWorkSpace();
            GridDisplayService.getGridDisplayByTag("Branch", $scope.firmId)//replace with Params
             .then(
                function( branchs ) {
                    if(branchs!=undefined){
                        console.log(branchs);
                        $scope.setBranchs(branchs.content);
                        $scope.setShowBranchList(true);  

                    }
                }
            );
        }  


        $scope.setupBranchForm = function(mode){
            $scope.setShowBranchList(false);
            $scope.setShowBranchForm(false);
            //$scope.clearBranchWorkSpace();
            if(mode=="EditBranch")
                $scope.setShowBranchForm(true);
            if(mode=="LoadBranchWorkspace")
                $scope.setShowBranchWorkSpace(true);
        }


        $scope.setShowAddBranchForm = function(){
            //$scope.clearBranchWorkSpace();
            $scope.setShowLawyerList(false);
            $scope.setShowLawyerForm(false);
            $scope.hideLawyer();
            $scope.setShowBranchList(false);
            $scope.setBranchEditMode(0);
            $scope.setBranch({});
            $scope.setShowBranchForm(true);
        }

        $scope.setShowEditBranchForm = function(branchId){
            //$scope.clearBranchWorkSpace();
            $scope.hideLawyer();
            $scope.setShowBranchList(false);
            $scope.setBranchEditMode(1);
            $scope.getBranch(branchId,"EditBranch");
            $scope.setShowBranchForm(true);
        }

        $scope.setDisplayBranchDetails = function(branch){ //Unload form
            //$scope.clearBranchWorkSpace();
            $scope.getBranchDetailedList();//Add Params
            //$scope.getBranchMenu(); //Add Params
        }

        $scope.hideBranchEditForm = function(branchId){ //Rename or cimmbien with details
            $scope.setShowBranchForm(false);
            $scope.setShowBranchList(true);
            $scope.setBranchEditMode("");
            //$scope.getBranchMenu(); //Add Params
            $scope.getBranchDetailedList();//Add Params
        }

        $scope.hideBranch= function()
        {
            $scope.hideLawyer();
            $scope.setShowBranchForm(false);
            $scope.setShowBranchList(false);
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
            GridDisplayService.getGridDisplayByTag("Lawyer", $scope.branchId)//replace with Params
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

        $scope.hideLawyer = function()
        {
            $scope.setShowLawyerForm(false);
            $scope.setShowLawyerList(false);
        }
    
}]);