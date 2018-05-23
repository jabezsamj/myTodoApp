'use strict';
var IMAGE_URI = "Image"
var TRUCK_URI = "Truck"
var TRUCKDOCUMENT_URI = "TruckDocument"
var DRIVERDOCUMENT_URI = "DriverDocument"

services.factory('ImageService', function ($http, $q , imageFileService) {
    // Return public API.
    return({
        createImage:createImage,
        updateImage:updateImage,
        getAllImages:getAllImages,
        getImageById: getImageById,
        uploadFile:uploadFile,
            
        deleteImageById:deleteImageById
    });

    function createImage( image ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + IMAGE_URI,
            data:image
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateImage( image ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + IMAGE_URI,
            data:image
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getImageById(imageId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + IMAGE_URI+ "/" +imageId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllImages(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  IMAGE_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }


 function uploadFile( file, image ) {
      image.fileName =file.name;
      image.fileSize = file.size;
      image.fileType = file.type;
      var formData = new FormData();
      formData.append('file', file);
      formData.append('image', JSON.stringify(image));
        var request = $http({

            method: "post",
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined},
            //headers: {'Content-Type': 'multipart/form-data'},
            url:  BASE_API + IMAGE_URI + "/Upload" ,
            crossDomain:true,
            data:formData
        });
        
        if(imageFileService.length>0){
                for(var i=0;i<imageFileService.length;i++){
                  imageFileService.pop(i);
                }
        }

        return( request.then( handleSuccess, handleError ) );
    }

     

    function deleteImageById(imageId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + IMAGE_URI+ "/Delete/" +imageId
        });
        return( request.then( handleSuccess, handleError ) );
    }

  
});