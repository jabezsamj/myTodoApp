'use strict';

/* Directives */


var app = angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});


app.directive("myDirective", function(){
    return {
        restrict: "EA",
        scope: false,
        template: "<div>Your name is : {{name}}</div>"+
            "Change your name : <input type='text' ng-model='name' />"
    };
});


app.directive('tatMeter', function() {
    return {
        restrict: 'E',
        scope:{
            random : '@'
        },
        template : "<div class='progress progress active' style='padding:0px'><div class='progress-bar progress-bar-info' aria-valuenow='{{random}}' aria-valuemin='0' aria-valuemax='100' style='width: {{random}}%'>" +
            "{{random}}" +
            "</div></div>"
    };
});

app.directive('alertBox', function() {
    return {
        restrict: 'E',
        scope:{
            class : '@'
        },
        template : "Some Alert{{class}}"
    };
});


myApp.directive('filemodel',  ['$parse', 'fileService', function ($parse,fileService) {

return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function(){
              if(fileService.length>0){
                for(var i=0;i<fileService.length;i++){
                  fileService.pop(i);
                }
              }
                scope.$apply(function(){
                  if (element[0].files != undefined) {
                    fileService.push(element[0].files[0]);
                    console.log('directive applying with file');
                  }                            
              });
            });
        }
    };

}]);



myApp.directive('imagemodel',  ['$parse', 'imageFileService', function ($parse,imageFileService) {

return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.imagemodel);
            var modelSetter = model.assign;
            element.bind('change', function(){
              if(imageFileService.length>0){
                for(var i=0;i<imageFileService.length;i++){
                  imageFileService.pop(i);
                }
              }

                scope.$apply(function(){
                  if (element[0].files != undefined) {
                    imageFileService.push(element[0].files[0]);
                  }                            });
            });
        }
    };

}]);