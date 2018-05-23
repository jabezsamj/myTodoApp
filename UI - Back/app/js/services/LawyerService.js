'use strict';
var LAWYER_URI = "Lawyer"
var LAWYER_URI = "Lawyer"
var FIRM_URI = "Firm"
var BRANCH_URI = "Branch"

services.factory('LawyerService', function ($http, $q ) {
    // Return public API.
    return({
        createLawyer:createLawyer,
        updateLawyer:updateLawyer,
        getAllLawyers:getAllLawyers,
        getAllLawyersByLawyerId:getAllLawyersByLawyerId,
        getAllLawyersByFirmId:getAllLawyersByFirmId,
        getAllLawyersByBranchId:getAllLawyersByBranchId,
        getLawyerById: getLawyerById
    });

    function createLawyer( lawyer ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + LAWYER_URI,
            data:lawyer
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateLawyer( lawyer ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + LAWYER_URI,
            data:lawyer
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getLawyerById(lawyerId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + LAWYER_URI+ "/" +lawyerId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllLawyers(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  LAWYER_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllLawyersByLawyerId(lawyerId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + LAWYER_URI+ "/" +LAWYER_URI+ "/" +lawyerId 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllLawyersByFirmId(firmId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + LAWYER_URI+ "/" +FIRM_URI+ "/" +firmId 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllLawyersByBranchId(branchId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + LAWYER_URI+ "/" +BRANCH_URI+ "/" +branchId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});