
myApp.controller('BookCategorySetupWorkSpaceCtrl', ['$scope', '$location', '$http','$routeParams', '$sce', 'GridDisplayService', 'BookCategoryService', 'BookSubCategoryService', 'BookCategoryLabelsService', 'BranchService', 
    function($scope, $location, $http, $routeParams, $sce, GridDisplayService ,BookCategoryService,BookSubCategoryService,BookCategoryLabelsService,BranchService){

            
        $scope.showBookCategoryList = false;
	$scope.showBookCategoryForm = false;        
        $scope.showBookSubCategoryList = false;
	$scope.showBookSubCategoryForm = false;        
        $scope.showBookCategoryLabelsList = false;
	$scope.showBookCategoryLabelsForm = false;        
        $scope.showBranchList = false;
	$scope.showBranchForm = false;    
      
    
        $scope.setShowBookCategoryList = function(status){
		$scope.showBookCategoryList = status;
	}

        $scope.setShowBookCategoryForm = function(status){
		$scope.showBookCategoryForm = status;
	}

        $scope.setShowBookSubCategoryList = function(status){
		$scope.showBookSubCategoryList = status;
	}

        $scope.setShowBookSubCategoryForm = function(status){
		$scope.showBookSubCategoryForm = status;
	}

        $scope.setShowBookCategoryLabelsList = function(status){
		$scope.showBookCategoryLabelsList = status;
	}

        $scope.setShowBookCategoryLabelsForm = function(status){
		$scope.showBookCategoryLabelsForm = status;
	}

        $scope.setShowBranchList = function(status){
		$scope.showBranchList = status;
	}

        $scope.setShowBranchForm = function(status){
		$scope.showBranchForm = status;
	}


  $scope.loadBookCategorySetupWorkSpace = function(){
    
$scope.getBookCategoryDetailedList();

$scope.getBookSubCategoryDetailedList();

$scope.getBookCategoryLabelsDetailedList();

$scope.getBranchDetailedList();

  }

  $scope.clearBookCategorySetupWorkSpace =function(){
        
                $scope.showBookCategoryList = false;
		$scope.showBookCategoryForm = false;
                $scope.showBookSubCategoryList = false;
		$scope.showBookSubCategoryForm = false;
                $scope.showBookCategoryLabelsList = false;
		$scope.showBookCategoryLabelsForm = false;
                $scope.showBranchList = false;
		$scope.showBranchForm = false;
  }


        //BookCategory

        $scope.bookCategoryEditMode="";
        $scope.bookCategory ={};
        $scope.bookCategoryId ="";
        $scope.bookCategorys ={};

        $scope.setBookCategoryEditMode=function(editMode){
            $scope.bookCategoryEditMode=editMode;
        }


        $scope.setBookCategoryId = function(bookCategoryId){
            $scope.bookCategoryId= bookCategoryId;      
        }

        $scope.setBookCategory = function(bookCategory){
            $scope.bookCategory= bookCategory;     
            $scope.setBookCategoryId(bookCategory.id);
            if($scope.bookCategoryEditMode==""){
                //Set the next Level Item Detail Liest
            }
        }


        $scope.setBookCategorys = function(bookCategorys){
            $scope.bookCategorys= bookCategorys;      
        }

        $scope.getBookCategory = function(id,mode){
            BookCategoryService.getBookCategoryById(id)
            .then(
                function(bookCategory){
                    if(bookCategory!=undefined){
                        $scope.setBookCategory(bookCategory);
                        $scope.setupBookCategoryForm(mode);
                    }
                }
            );      
        }

        $scope.getBookCategoryMenu = function(){ //Add Params
            $scope.setShowBookCategoryMenu(false);
            MenuListItemService.getMenuListItemByTag("BookCategory", 0)
                     .then(
                        function( bookCategorys ) {
                            if(bookCategorys!=undefined){
                                $scope.bookCategoryMenu = bookCategorys;  
                                console.log(bookCategorys);
                                $scope.setShowBookCategoryMenu(true);              
                            }
                        }
                    );

        }

        $scope.getBookCategoryDetailedList = function(){//Add params
            //$scope.clearBookCategoryWorkSpace();
            GridDisplayService.getGridDisplayByTag("BookCategory", 0)//replace with Params
             .then(
                function( bookCategorys ) {
                    if(bookCategorys!=undefined){
                        console.log(bookCategorys);
                        $scope.setBookCategorys(bookCategorys.content);
                        $scope.setShowBookCategoryList(true);  

                    }
                }
            );
        }  


        $scope.setupBookCategoryForm = function(mode){
            $scope.setShowBookCategoryList(false);
            $scope.setShowBookCategoryForm(false);
            //$scope.clearBookCategoryWorkSpace();
            if(mode=="EditBookCategory")
                $scope.setShowBookCategoryForm(true);
            if(mode=="LoadBookCategoryWorkspace")
                $scope.setShowBookCategoryWorkSpace(true);
        }


        $scope.setShowAddBookCategoryForm = function(){
            //$scope.clearBookCategoryWorkSpace();
            $scope.setShowBookCategoryList(false);
            $scope.setBookCategoryEditMode(0);
            $scope.setBookCategory({});
            $scope.setShowBookCategoryForm(true);
        }

        $scope.setShowEditBookCategoryForm = function(bookCategoryId){
            //$scope.clearBookCategoryWorkSpace();
            $scope.setShowBookCategoryList(false);
            $scope.setBookCategoryEditMode(1);
            $scope.getBookCategory(bookCategoryId,"EditBookCategory");
            $scope.setShowBookCategoryForm(true);
        }

        $scope.setDisplayBookCategoryDetails = function(bookCategory){ //Unload form
            //$scope.clearBookCategoryWorkSpace();
            $scope.getBookCategoryDetailedList();//Add Params
            //$scope.getBookCategoryMenu(); //Add Params
        }

        $scope.hideBookCategoryEditForm = function(bookCategoryId){ //Rename or cimmbien with details
            $scope.setShowBookCategoryForm(false);
            $scope.setShowBookCategoryList(true);
            $scope.setBookCategoryEditMode("");
            //$scope.getBookCategoryMenu(); //Add Params
            $scope.getBookCategoryDetailedList();//Add Params
        }
    //BookSubCategory

        $scope.bookSubCategoryEditMode="";
        $scope.bookSubCategory ={};
        $scope.bookSubCategoryId ="";
        $scope.bookSubCategorys ={};

        $scope.setBookSubCategoryEditMode=function(editMode){
            $scope.bookSubCategoryEditMode=editMode;
        }


        $scope.setBookSubCategoryId = function(bookSubCategoryId){
            $scope.bookSubCategoryId= bookSubCategoryId;      
        }

        $scope.setBookSubCategory = function(bookSubCategory){
            $scope.bookSubCategory= bookSubCategory;     
            $scope.setBookSubCategoryId(bookSubCategory.id);
            if($scope.bookSubCategoryEditMode==""){
                //Set the next Level Item Detail Liest
            }
        }


        $scope.setBookSubCategorys = function(bookSubCategorys){
            $scope.bookSubCategorys= bookSubCategorys;      
        }

        $scope.getBookSubCategory = function(id,mode){
            BookSubCategoryService.getBookSubCategoryById(id)
            .then(
                function(bookSubCategory){
                    if(bookSubCategory!=undefined){
                        $scope.setBookSubCategory(bookSubCategory);
                        $scope.setupBookSubCategoryForm(mode);
                    }
                }
            );      
        }

        $scope.getBookSubCategoryMenu = function(){ //Add Params
            $scope.setShowBookSubCategoryMenu(false);
            MenuListItemService.getMenuListItemByTag("BookSubCategory", 0)
                     .then(
                        function( bookSubCategorys ) {
                            if(bookSubCategorys!=undefined){
                                $scope.bookSubCategoryMenu = bookSubCategorys;  
                                console.log(bookSubCategorys);
                                $scope.setShowBookSubCategoryMenu(true);              
                            }
                        }
                    );

        }

        $scope.getBookSubCategoryDetailedList = function(){//Add params
            //$scope.clearBookSubCategoryWorkSpace();
            GridDisplayService.getGridDisplayByTag("BookSubCategory", 0)//replace with Params
             .then(
                function( bookSubCategorys ) {
                    if(bookSubCategorys!=undefined){
                        console.log(bookSubCategorys);
                        $scope.setBookSubCategorys(bookSubCategorys.content);
                        $scope.setShowBookSubCategoryList(true);  

                    }
                }
            );
        }  


        $scope.setupBookSubCategoryForm = function(mode){
            $scope.setShowBookSubCategoryList(false);
            $scope.setShowBookSubCategoryForm(false);
            //$scope.clearBookSubCategoryWorkSpace();
            if(mode=="EditBookSubCategory")
                $scope.setShowBookSubCategoryForm(true);
            if(mode=="LoadBookSubCategoryWorkspace")
                $scope.setShowBookSubCategoryWorkSpace(true);
        }


        $scope.setShowAddBookSubCategoryForm = function(){
            //$scope.clearBookSubCategoryWorkSpace();
            $scope.setShowBookSubCategoryList(false);
            $scope.setBookSubCategoryEditMode(0);
            $scope.setBookSubCategory({});
            $scope.setShowBookSubCategoryForm(true);
        }

        $scope.setShowEditBookSubCategoryForm = function(bookSubCategoryId){
            //$scope.clearBookSubCategoryWorkSpace();
            $scope.setShowBookSubCategoryList(false);
            $scope.setBookSubCategoryEditMode(1);
            $scope.getBookSubCategory(bookSubCategoryId,"EditBookSubCategory");
            $scope.setShowBookSubCategoryForm(true);
        }

        $scope.setDisplayBookSubCategoryDetails = function(bookSubCategory){ //Unload form
            //$scope.clearBookSubCategoryWorkSpace();
            $scope.getBookSubCategoryDetailedList();//Add Params
            //$scope.getBookSubCategoryMenu(); //Add Params
        }

        $scope.hideBookSubCategoryEditForm = function(bookSubCategoryId){ //Rename or cimmbien with details
            $scope.setShowBookSubCategoryForm(false);
            $scope.setShowBookSubCategoryList(true);
            $scope.setBookSubCategoryEditMode("");
            //$scope.getBookSubCategoryMenu(); //Add Params
            $scope.getBookSubCategoryDetailedList();//Add Params
        }
    //BookCategoryLabels

        $scope.bookCategoryLabelsEditMode="";
        $scope.bookCategoryLabels ={};
        $scope.bookCategoryLabelsId ="";
        $scope.bookCategoryLabelss ={};

        $scope.setBookCategoryLabelsEditMode=function(editMode){
            $scope.bookCategoryLabelsEditMode=editMode;
        }


        $scope.setBookCategoryLabelsId = function(bookCategoryLabelsId){
            $scope.bookCategoryLabelsId= bookCategoryLabelsId;      
        }

        $scope.setBookCategoryLabels = function(bookCategoryLabels){
            $scope.bookCategoryLabels= bookCategoryLabels;     
            $scope.setBookCategoryLabelsId(bookCategoryLabels.id);
            if($scope.bookCategoryLabelsEditMode==""){
                //Set the next Level Item Detail Liest
            }
        }


        $scope.setBookCategoryLabelss = function(bookCategoryLabelss){
            $scope.bookCategoryLabelss= bookCategoryLabelss;      
        }

        $scope.getBookCategoryLabels = function(id,mode){
            BookCategoryLabelsService.getBookCategoryLabelsById(id)
            .then(
                function(bookCategoryLabels){
                    if(bookCategoryLabels!=undefined){
                        $scope.setBookCategoryLabels(bookCategoryLabels);
                        $scope.setupBookCategoryLabelsForm(mode);
                    }
                }
            );      
        }

        $scope.getBookCategoryLabelsMenu = function(){ //Add Params
            $scope.setShowBookCategoryLabelsMenu(false);
            MenuListItemService.getMenuListItemByTag("BookCategoryLabels", 0)
                     .then(
                        function( bookCategoryLabelss ) {
                            if(bookCategoryLabelss!=undefined){
                                $scope.bookCategoryLabelsMenu = bookCategoryLabelss;  
                                console.log(bookCategoryLabelss);
                                $scope.setShowBookCategoryLabelsMenu(true);              
                            }
                        }
                    );

        }

        $scope.getBookCategoryLabelsDetailedList = function(){//Add params
            //$scope.clearBookCategoryLabelsWorkSpace();
            GridDisplayService.getGridDisplayByTag("BookCategoryLabels", 0)//replace with Params
             .then(
                function( bookCategoryLabelss ) {
                    if(bookCategoryLabelss!=undefined){
                        console.log(bookCategoryLabelss);
                        $scope.setBookCategoryLabelss(bookCategoryLabelss.content);
                        $scope.setShowBookCategoryLabelsList(true);  

                    }
                }
            );
        }  


        $scope.setupBookCategoryLabelsForm = function(mode){
            $scope.setShowBookCategoryLabelsList(false);
            $scope.setShowBookCategoryLabelsForm(false);
            //$scope.clearBookCategoryLabelsWorkSpace();
            if(mode=="EditBookCategoryLabels")
                $scope.setShowBookCategoryLabelsForm(true);
            if(mode=="LoadBookCategoryLabelsWorkspace")
                $scope.setShowBookCategoryLabelsWorkSpace(true);
        }


        $scope.setShowAddBookCategoryLabelsForm = function(){
            //$scope.clearBookCategoryLabelsWorkSpace();
            $scope.setShowBookCategoryLabelsList(false);
            $scope.setBookCategoryLabelsEditMode(0);
            $scope.setBookCategoryLabels({});
            $scope.setShowBookCategoryLabelsForm(true);
        }

        $scope.setShowEditBookCategoryLabelsForm = function(bookCategoryLabelsId){
            //$scope.clearBookCategoryLabelsWorkSpace();
            $scope.setShowBookCategoryLabelsList(false);
            $scope.setBookCategoryLabelsEditMode(1);
            $scope.getBookCategoryLabels(bookCategoryLabelsId,"EditBookCategoryLabels");
            $scope.setShowBookCategoryLabelsForm(true);
        }

        $scope.setDisplayBookCategoryLabelsDetails = function(bookCategoryLabels){ //Unload form
            //$scope.clearBookCategoryLabelsWorkSpace();
            $scope.getBookCategoryLabelsDetailedList();//Add Params
            //$scope.getBookCategoryLabelsMenu(); //Add Params
        }

        $scope.hideBookCategoryLabelsEditForm = function(bookCategoryLabelsId){ //Rename or cimmbien with details
            $scope.setShowBookCategoryLabelsForm(false);
            $scope.setShowBookCategoryLabelsList(true);
            $scope.setBookCategoryLabelsEditMode("");
            //$scope.getBookCategoryLabelsMenu(); //Add Params
            $scope.getBookCategoryLabelsDetailedList();//Add Params
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
                //Set the next Level Item Detail Liest
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
            GridDisplayService.getGridDisplayByTag("Branch", 0)//replace with Params
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
            $scope.setShowBranchList(false);
            $scope.setBranchEditMode(0);
            $scope.setBranch({});
            $scope.setShowBranchForm(true);
        }

        $scope.setShowEditBranchForm = function(branchId){
            //$scope.clearBranchWorkSpace();
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


    
}]);