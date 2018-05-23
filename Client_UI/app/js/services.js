'use strict';

/* Services */
var BASE_API = "http://localhost:8080/";
var services = angular.module('myApp.services', ['ngResource']);

function handleError( response ) {
    if (
        ! angular.isObject( response.data ) ||
            ! response.data.message
        ) {
        return( $q.reject( "An unknown error occurred." ) );
    }
    return( $q.reject( response.data.message ) );
}

function handleSuccess( response ) {
    return( response.data );
}


myApp.factory('fileService', function() {
    var files = [];
    return files;
})

myApp.factory('imageFileService', function() {
    var files = [];
    return files;
})