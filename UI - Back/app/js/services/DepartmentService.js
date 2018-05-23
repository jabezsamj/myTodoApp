'use strict';
var DEPARTMENT_URI = "Department"
var FIRM_URI = "Firm"

services.factory('DepartmentService', function ($http, $q ) {
    // Return public API.
    return({
        createDepartment:createDepartment,
        updateDepartment:updateDepartment,
        getAllDepartments:getAllDepartments,
        getAllDepartmentsByFirmId:getAllDepartmentsByFirmId,
        getDepartmentById: getDepartmentById
    });

    function createDepartment( department ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + DEPARTMENT_URI,
            data:department
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateDepartment( department ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + DEPARTMENT_URI,
            data:department
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getDepartmentById(departmentId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + DEPARTMENT_URI+ "/" +departmentId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllDepartments(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  DEPARTMENT_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllDepartmentsByFirmId(firmId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + DEPARTMENT_URI+ "/" +FIRM_URI+ "/" +firmId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});