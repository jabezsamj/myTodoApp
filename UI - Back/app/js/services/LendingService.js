'use strict';
var LENDING_URI = "Lending"
var BOOK_URI = "Book"
var LAWYER_URI = "Lawyer"
var LIBRARAIAN_URI = "Libraraian"

services.factory('LendingService', function ($http, $q ) {
    // Return public API.
    return({
        createLending:createLending,
        updateLending:updateLending,
        getAllLendings:getAllLendings,
        getAllLendingsByBookId:getAllLendingsByBookId,
        getAllLendingsByLawyerId:getAllLendingsByLawyerId,
        getAllLendingsByLibraraianId:getAllLendingsByLibraraianId,
        getLendingById: getLendingById
    });

    function createLending( lending ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + LENDING_URI,
            data:lending
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateLending( lending ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + LENDING_URI,
            data:lending
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getLendingById(lendingId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + LENDING_URI+ "/" +lendingId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllLendings(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  LENDING_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllLendingsByBookId(bookId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + LENDING_URI+ "/" +BOOK_URI+ "/" +bookId 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllLendingsByLawyerId(lawyerId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + LENDING_URI+ "/" +LAWYER_URI+ "/" +lawyerId 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllLendingsByLibraraianId(libraraianId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + LENDING_URI+ "/" +LIBRARAIAN_URI+ "/" +libraraianId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});