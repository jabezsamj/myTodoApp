'use strict';
var TODO_URI = "Todo"

services.factory('TodoService', function ($http, $q ) {
    // Return public API.
    return({
        createTodo:createTodo,
        updateTodo:updateTodo,
        getAllTodos:getAllTodos,
        getTodoById: getTodoById,
        deleteTodoById:deleteTodoById
    });

    function createTodo( Todo ) {
        var request = $http({
            method: "post",
            crossDomain:true,
            url:  BASE_API + TODO_URI,
            data:Todo
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function updateTodo( Todo ) {
        var request = $http({
            method: "put",
            crossDomain:true,
            url:  BASE_API + TODO_URI,
            data:Todo
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getTodoById(TodoId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + TODO_URI+ "/" +TodoId
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function getAllTodos(){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API +  TODO_URI 
        });
        return( request.then( handleSuccess, handleError ) );
    }

    function deleteTodoById(todoId){
        var request = $http({
            method: "get",
            crossDomain:true,
            url: BASE_API + TODO_URI+ "/Delete/" +todoId
        });
        return( request.then( handleSuccess, handleError ) );
    }
  
});