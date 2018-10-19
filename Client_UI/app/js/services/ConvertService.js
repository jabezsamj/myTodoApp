'use strict';
var USER_URI1 = "DunamisUser"
var PERSON_URI = "Person"
var REGISTRATION = "registration"
var RESET = "reset"

services.factory('ConvertService', function ($http, $q ) {
    // Return public API.
    return({
        uploadImage:uploadImage
    });




     function uploadImage( file, image ) {
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




});