'use strict';
var GRIDCOLUMN_URI = "GridColumn"

services.factory('GridColumnService', function ($http, $q ) {
    // Return public API.
    return({
        createGridColumn:createGridColumn,
        updateGridColumn:updateGridColumn,
        getAllGridColumns:getAllGridColumns,
        getGridColumnById: getGridColumnById
    });

    function createGridColumn( gridColumn ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + GRIDCOLUMN_URI,
            data:gridColumn
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateGridColumn( gridColumn ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + GRIDCOLUMN_URI,
            data:gridColumn
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getGridColumnById(gridColumnId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + GRIDCOLUMN_URI+ "/" +gridColumnId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllGridColumns(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  GRIDCOLUMN_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});