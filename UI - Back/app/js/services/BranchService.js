'use strict';
var BRANCH_URI = "Branch"
var FIRM_URI = "Firm"

services.factory('BranchService', function ($http, $q ) {
    // Return public API.
    return({
        createBranch:createBranch,
        updateBranch:updateBranch,
        getAllBranchs:getAllBranchs,
        getAllBranchsByFirmId:getAllBranchsByFirmId,
        getBranchById: getBranchById
    });

    function createBranch( branch ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + BRANCH_URI,
            data:branch
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateBranch( branch ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + BRANCH_URI,
            data:branch
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getBranchById(branchId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BRANCH_URI+ "/" +branchId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBranchs(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  BRANCH_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBranchsByFirmId(firmId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BRANCH_URI+ "/" +FIRM_URI+ "/" +firmId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});