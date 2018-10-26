'use strict';

var IMAGE_URI = "Image"


services.factory('ConvertService', function ($http, $q, imageFileService ) {
    // Return public API.
    return({
        uploadImage:uploadImage
    });


    function uploadImage(file, image) {
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
            url:  BASE_API + IMAGE_URI + "/Convert" ,
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