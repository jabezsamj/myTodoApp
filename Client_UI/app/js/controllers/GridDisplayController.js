'use strict';
/* Controllers */

myApp.controller('GridDisplayCtrl', ['$scope', '$location', '$http','$routeParams', '$sce','GridDisplayService', 'GridColumnService', 
    function($scope, $location, $http, $routeParams, $sce, GridDisplayService , GridColumnService){

    $scope.gridDisplay = {};
    $scope.gridDisplays = {};  
    $scope.gridColumns = {};
    $scope.gridColumn = {};

    $scope.buttonTextGridDisplay = "";

    $scope.param1 = "";
    $scope.param2 = "";
    
    if( $routeParams.param2 != undefined){
        $scope.param2 = $routeParams.param2;
    }    

    if( $routeParams.param1 != undefined){
        $scope.param1 = $routeParams.param1;
    }

    $scope.currentPageGridDisplay = 1;
    $scope.pageSizeGridDisplay = 6;

    $scope.sortKeyGridDisplay = "";
    $scope.gridDisplayReverse = false; 

    $scope.sortGridDisplay = function(columnName,reverse){
        $scope.sortKeyGridDisplay = columnName;
        $scope.gridDisplayReverse = !$scope.gridDisplayReverse; 
    }


    $scope.getAllGridColumns= function(){
        GridColumnService.getAllGridColumns()
            .then(
                function( gridColumns ) {
                    if(gridColumns!=undefined){
                        $scope.gridColumns = gridColumns;    
                    }
                }
            );
    }
       
    $scope.setGridColumn= function(id){
        GridColumnService.getGridColumnById(id)
            .then(
                function(gridColumn){
                    if(gridColumn!=undefined){
                        $scope.gridColumn=gridColumn;
                        $scope.param2=gridColumn.id;
                    }
                }
        );
    } 

    $scope.getAllGridColumns();
      
    $scope.loadGridDisplayForm = function(gridDisplay,isEdit){
        if (isEdit==1){
            $scope.buttonTextGridDisplay = "Update";
            $scope.gridDisplay = gridDisplay 
        }    
        else{
            $scope.buttonTextGridDisplay = "Add";
            $scope.gridDisplay = {} ;

        }    
                   
        $scope.showGridDisplayForm= true;
        $scope.showGridDisplayList= false;
       }


    $scope.saveGridDisplay = function(gridDisplay){
        if ($scope.buttonTextGridDisplay=="Add")
            GridDisplayService.createGridDisplay(gridDisplay)
                .then(
                    function( gridDisplay ) {
                        if(gridDisplay!=undefined){
                            $scope.gridDisplay = {};
                            $scope.hideGridDisplayForm();
                            $scope.getAllGridDisplays();
                            alert("GridDisplay Added!");
                        }else{
                        }
                    }
                );
        else{
            GridDisplayService.updateGridDisplay(gridDisplay)
                .then(
                    function( gridDisplay ) {
                        if(gridDisplay!=undefined){
                            $scope.gridDisplay = {};
                            $scope.hideGridDisplayForm(); 
                            $scope.getAllGridDisplays();
                            alert("GridDisplay Updated!");
                        }else{
                        }
                    }
                );
            }
    }

    $scope.hideGridDisplayForm = function(){
        $scope.showGridDisplayForm= false;
        $scope.showGridDisplayList= true;
    }

    $scope.getAllGridDisplays= function(){
        if( $scope.param1 != ""){

            if($scope.param1 =="GridColumn") {
                $scope.setGridColumn($scope.param2);
                GridDisplayService.getAllGridDisplaysByGridColumnId($scope.param2)
                     .then(
                        function( gridDisplays ) {
                            if(gridDisplays!=undefined){
                                $scope.gridDisplays = gridDisplays;                
                            }
                        }
                    );
            }
        }else{
            GridDisplayService.getAllGridDisplays()
                .then(
                    function( gridDisplays ) {
                        if(gridDisplays!=undefined){
                            $scope.gridDisplays = gridDisplays;
                            
                        }
                    }
                );
            }
        }    

    $scope.getAllGridDisplays();
}]);