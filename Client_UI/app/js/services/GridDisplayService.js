'use strict';
var GRIDDISPLAY_URI = "GridDisplay"
var GRIDCOLUMN_URI = "GridColumn"

services.factory('GridDisplayService', function ($http, $q ) {
    // Return public API.
    return({
        createGridDisplay:createGridDisplay,
        updateGridDisplay:updateGridDisplay,
        getAllGridDisplays:getAllGridDisplays,
        getAllGridDisplaysByGridColumnId:getAllGridDisplaysByGridColumnId,
        getGridDisplayById: getGridDisplayById,
        getGridDisplayByTag:getGridDisplayByTag,
        getGridDisplayByTag2:getGridDisplayByTag2,
        getGridDisplayByTag3:getGridDisplayByTag3
    });

    function createGridDisplay( gridDisplay ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + GRIDDISPLAY_URI,
            data:gridDisplay
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateGridDisplay( gridDisplay ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + GRIDDISPLAY_URI,
            data:gridDisplay
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getGridDisplayById(gridDisplayId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + GRIDDISPLAY_URI+ "/" +gridDisplayId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllGridDisplays(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  GRIDDISPLAY_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllGridDisplaysByGridColumnId(gridColumnId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + GRIDDISPLAY_URI+ "/" +GRIDCOLUMN_URI+ "/" +gridColumnId 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getGridDisplayByTag(tag,id){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + GRIDDISPLAY_URI+ "/GridDisplayByTag/" + tag + "/Param1/" +id
        });
        
        return( request.then( handleSuccess, handleError ) );
    }


    function getGridDisplayByTag2(tag,id,id2){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + GRIDDISPLAY_URI+ "/GridDisplayByTag/" + tag + "/Param1/" +id + "/Param2/" +id2
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getGridDisplayByTag3(tag,id,id2,id3){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + GRIDDISPLAY_URI+ "/GridDisplayByTag/" + tag + "/Param1/" +id + "/Param2/" +id2 +  "/Param3/" +id3
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});