myApp.controller('HomePageCtrl', ['$scope', '$location', '$http','$routeParams', '$cookies', '$sce', 'imageFileService', 'ConvertService',
   function($scope, $location, $http, $routeParams, $cookies, $sce, imageFileService, ConvertService){


    //Person
    $scope.image = {};
    $scope.imageSrc = {};
    $scope.url = {};

    //Workspace Items
      
    $scope.showHomeWorkSpace = false;


    $scope.setShowHomeWorkSpace = function(status){
           $scope.showHomeWorkSpace = status;
        }

    $scope.loadHomeWorkSpace = function(){
         $scope.setShowHomeWorkSpace(true);
       }
    
    $scope.loadHomeWorkSpace();

<<<<<<< HEAD

    /*
    function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var arrayBuffer = new ArrayBuffer(byteString.length);
    var _ia = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteString.length; i++) {
        _ia[i] = byteString.charCodeAt(i);
    }

    var dataView = new DataView(arrayBuffer);
    var blob = new Blob([dataView], { type: mimeString });
    return blob;
    

    }*/


    /*
    function dataURItoBlob(dataURI, type) {
    // convert base64 to raw binary data held in a string
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    var bb = new Blob([ab], { type: type });
    return bb;
    

    }*/



function base64ImageToBlob(str) {
  // extract content type and base64 payload from original string
  var pos = str.indexOf(';base64,');
  var type = str.substring(5, pos);
  var b64 = str.substr(pos + 8);

  // decode base64
  var imageContent = atob(b64);

  // create an ArrayBuffer and a view (as unsigned 8-bit)
  var buffer = new ArrayBuffer(imageContent.length);
  var view = new Uint8Array(buffer);

  // fill the view, using the decoded base64
  for(var n = 0; n < imageContent.length; n++) {
    view[n] = imageContent.charCodeAt(n);
  }

  // convert ArrayBuffer to Blob
  var blob = new Blob([buffer], { type: type });

  return blob;
}

 






    $scope.uploadImage = function(){

      if (imageFileService.length>0){
            var image = {};
            ConvertService.uploadImage(imageFileService[0],image)
            .then(
                    function( responseData ) {
                        if(responseData!=undefined){
                            //console.log(responseData[1]("Content-Disposition"));
                            //console.log(responseData["headers"].getVariable('fileType'));
                            //console.log(typeof responseData[0]);
                            //saveAs(new Blob([responseData[0]], {type:"text/plain"}),"filename.txt");
                            //console.log(responseData[0]);
                            

                            //var blob = dataURItoBlob(responseData['data']);

                            //uriContent = "data:application/octet-stream," + encodeURIComponent(responseData['data']);
                            
                            //newWindow = window.open(uriContent);
 

                            //var file = dataURItoBlob(responseData["data"], 'image/png');

                            //var image = new Blob([responseData['data']], { type: "image/png" });

                            
                            //console.log(responseData["data"]);

                            
                            var blob = base64ImageToBlob(responseData['data']);
                     
                            
                            //var blob = new Blob([ responseData["da"] ], { type : 'image/png' });
                            //$scope.url = (window.URL || window.webkitURL).createObjectURL( blob );

                            //var blob = new Blob([responseData['data']], { type: "image/png" });


                            //saveAs(blob, "picture.png");

                        }
                    });
            }
    }
=======
    $scope.uploadImage = function(){

      if (imageFileService.length>0){
            var image = {};
            ConvertService.uploadImage(imageFileService[0],image)
             .then(
                    function( image ) {
                        if(image!=undefined){
                             var file = new Blob([image], { type: 'application/jpg' });
                             saveAs(file, 'filename.jpg');
                        }
                    });
            }
    }
>>>>>>> 79620d411eb5b762eda56feca9f5ba606cdf2154
}]);
