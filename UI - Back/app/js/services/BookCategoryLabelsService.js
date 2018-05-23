'use strict';
var BOOKCATEGORYLABELS_URI = "BookCategoryLabels"
var FIRM_URI = "Firm"

services.factory('BookCategoryLabelsService', function ($http, $q ) {
    // Return public API.
    return({
        createBookCategoryLabels:createBookCategoryLabels,
        updateBookCategoryLabels:updateBookCategoryLabels,
        getAllBookCategoryLabelss:getAllBookCategoryLabelss,
        getAllBookCategoryLabelssByFirmId:getAllBookCategoryLabelssByFirmId,
        getBookCategoryLabelsById: getBookCategoryLabelsById
    });

    function createBookCategoryLabels( bookCategoryLabels ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + BOOKCATEGORYLABELS_URI,
            data:bookCategoryLabels
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateBookCategoryLabels( bookCategoryLabels ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + BOOKCATEGORYLABELS_URI,
            data:bookCategoryLabels
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getBookCategoryLabelsById(bookCategoryLabelsId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOKCATEGORYLABELS_URI+ "/" +bookCategoryLabelsId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBookCategoryLabelss(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  BOOKCATEGORYLABELS_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllBookCategoryLabelssByFirmId(firmId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + BOOKCATEGORYLABELS_URI+ "/" +FIRM_URI+ "/" +firmId 
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});