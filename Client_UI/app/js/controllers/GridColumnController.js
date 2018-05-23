'use strict';
/* Controllers */

myApp.controller('GridColumnCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','GridColumnService', 
    function($scope, $location, $http, $routeParams, $sce, GridColumnService ){

    $scope.gridColumn = {};
    $scope.gridColumns = {};  

    $scope.buttonTextGridColumn = "";

    $scope.param1 = "";
    $scope.param2 = "";
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageGridColumn = 1;
    $scope.pageSizeGridColumn = 6;

    $scope.sortKeyGridColumn = "";
    $scope.gridColumnReverse = false; 

    $scope.sortGridColumn = function(columnName,reverse){
        $scope.sortKeyGridColumn = columnName;
        $scope.gridColumnReverse = !$scope.gridColumnReverse; 
    }

      
    $scope.loadGridColumnForm = function(gridColumn,isEdit){
        if (isEdit==1){
            $scope.buttonTextGridColumn = "Update";
            $scope.gridColumn = gridColumn 
        }    
        else{
            $scope.buttonTextGridColumn = "Add";
            $scope.gridColumn = {} ;

        }    
                   
        $scope.showGridColumnForm= true;
        $scope.showGridColumnList= false;
       }


    $scope.saveGridColumn = function(gridColumn){
        if ($scope.buttonTextGridColumn=="Add")
            GridColumnService.createGridColumn(gridColumn)
                .then(
                    function( gridColumn ) {
                        if(gridColumn!=undefined){
                            $scope.gridColumn = {};
                            $scope.hideGridColumnForm();
                            $scope.getAllGridColumns();
                            alert("GridColumn Added!");
                        }else{
                        }
                    }
                );
        else{
            GridColumnService.updateGridColumn(gridColumn)
                .then(
                    function( gridColumn ) {
                        if(gridColumn!=undefined){
                            $scope.gridColumn = {};
                            $scope.hideGridColumnForm(); 
                            $scope.getAllGridColumns();
                            alert("GridColumn Updated!");
                        }else{
                        }
                    }
                );
            }
    }

    $scope.hideGridColumnForm = function(){
        $scope.showGridColumnForm= false;
        $scope.showGridColumnList= true;
    }

    $scope.getAllGridColumns= function(){
        if( $scope.param1 != ""){
        }else{
            GridColumnService.getAllGridColumns()
                .then(
                    function( gridColumns ) {
                        if(gridColumns!=undefined){
                            $scope.gridColumns = gridColumns;
                            
                        }
                    }
                );
            }
        }    

    $scope.getAllGridColumns();
}]);