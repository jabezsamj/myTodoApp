'use strict';

/* Controllers */

myApp.controller('HomePageCtrl', ['$scope', '$location', '$http', 
    function($scope,$location, $http ){
    $("#right-navigation").show();
   
    $scope.hideAll = function(){
        $scope.showPersonList=false;
        $scope.showPersonForm=false;
        $scope.showIdentityList=false;
        $scope.showIdentityForm=false;
        $scope.showIdentityTypeList=false;
        $scope.showIdentityTypeForm=false;
        $scope.showLibrarianList=false;
        $scope.showLibrarianForm=false;
        $scope.showLawyerList=false;
        $scope.showLawyerForm=false;
        $scope.showBookCategoryList=false;
        $scope.showBookCategoryForm=false;
        $scope.showBookSubCategoryList=false;
        $scope.showBookSubCategoryForm=false;
        $scope.showBookCategoryLabelsList=false;
        $scope.showBookCategoryLabelsForm=false;
        $scope.showLendingTypeList=false;
        $scope.showLendingTypeForm=false;
        $scope.showMembershipTypeList=false;
        $scope.showMembershipTypeForm=false;
        $scope.showFirmList=false;
        $scope.showFirmForm=false;
        $scope.showDepartmentList=false;
        $scope.showDepartmentForm=false;
        $scope.showBookList=false;
        $scope.showBookForm=false;
        $scope.showAuthorList=false;
        $scope.showAuthorForm=false;
        $scope.showBookAuthorList=false;
        $scope.showBookAuthorForm=false;
        $scope.showLendingList=false;
        $scope.showLendingForm=false;
        $scope.showBranchList=false;
        $scope.showBranchForm=false;
    }
    $scope.hideAll();

    $scope.setEntity = function(entityName){
        $scope.hideAll();
        switch (entityName){
        	
            case 'Person':{
	        $scope.showPersonList=true;
                break;
	    }
            case 'Identity':{
	        $scope.showIdentityList=true;
                break;
	    }
            case 'IdentityType':{
	        $scope.showIdentityTypeList=true;
                break;
	    }
            case 'Librarian':{
	        $scope.showLibrarianList=true;
                break;
	    }
            case 'Lawyer':{
	        $scope.showLawyerList=true;
                break;
	    }
            case 'BookCategory':{
	        $scope.showBookCategoryList=true;
                break;
	    }
            case 'BookSubCategory':{
	        $scope.showBookSubCategoryList=true;
                break;
	    }
            case 'BookCategoryLabels':{
	        $scope.showBookCategoryLabelsList=true;
                break;
	    }
            case 'LendingType':{
	        $scope.showLendingTypeList=true;
                break;
	    }
            case 'MembershipType':{
	        $scope.showMembershipTypeList=true;
                break;
	    }
            case 'Firm':{
	        $scope.showFirmList=true;
                break;
	    }
            case 'Department':{
	        $scope.showDepartmentList=true;
                break;
	    }
            case 'Book':{
	        $scope.showBookList=true;
                break;
	    }
            case 'Author':{
	        $scope.showAuthorList=true;
                break;
	    }
            case 'BookAuthor':{
	        $scope.showBookAuthorList=true;
                break;
	    }
            case 'Lending':{
	        $scope.showLendingList=true;
                break;
	    }
            case 'Branch':{
	        $scope.showBranchList=true;
                break;
	    }	        
        }
    }
}]);