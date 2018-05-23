myApp.controller('HomeWorkSpaceCtrl', ['$scope', '$location', '$http','$routeParams', '$sce', 'GridDisplayService', 'TodoService', 'StatusService',
    function($scope, $location, $http, $routeParams, $sce, GridDisplayService, TodoService, StatusService ){
    
    var pageSize = 4;

    $scope.tasks = {};
    $scope.statuss = {};
    
    $scope.task = {};
    $scope.taskNextStatus = {};
    $scope.taskPreviousStatus = {};

    $scope.statusTodoTasks = {};
    $scope.statusInprogressTasks = {};
    $scope.statusCompletedTasks = {};


    $scope.showAddTasksForm = false;
    $scope.showEditTasksForm = false;
    $scope.showKanban = true;

    //Pagination parameters for To-Do
    $scope.currentPageStatusToDo = 1;
    $scope.pageSizeStatusToDo = pageSize;

    //Pagination parameters for In-progress
    $scope.currentPageStatusInProgress = 1;
    $scope.pageSizeStatusInProgress = pageSize;

    //Pagination parameters for Completed
    $scope.currentPageStatusCompleted = 1;
    $scope.pageSizeStatusCompleted = pageSize;
    
    

    //Control the buttons
    $scope.hoverIn = function(){
    this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
    this.hoverEdit = false;
    };

    $scope.setShowKanban = function()
    {
        $scope.showAddTasksForm = false;
        $scope.showEditTasksForm = false;
        $scope.task = {};
        $scope.taskNextStatus = {};
        $scope.taskPreviousStatus = {};
        $scope.getTasksDetailedList();
        $scope.showKanban = true;
    }


    $scope.setShowAddTasksForm = function(){
           $scope.showKanban = false;
           $scope.showEditTasksForm = false;
           $scope.showAddTasksForm = true;
        }



    $scope.setShowEditTaskForm = function(task)
    {
        $scope.showKanban = false;
        $scope.showAddTasksForm = false;
        $scope.task = task;
        $scope.setStatus(task.status);
        $scope.showEditTasksForm = true;
    }
    

    
    $scope.setStatus = function(status)
    {

       $scope.task.status = status;
       if(status.status == $scope.statuss[0].status)
       {
          $scope.taskNextStatus = $scope.statuss[1];
          $scope.taskPreviousStatus = null;
       }
       else if (status.status == $scope.statuss[1].status)
       {
          $scope.taskNextStatus = $scope.statuss[2];
          $scope.taskPreviousStatus = $scope.statuss[0];
       }
       else if (status.status == $scope.statuss[2].status)
       {
          $scope.taskNextStatus = null;
          $scope.taskPreviousStatus = $scope.statuss[1];
       }
       else
       {
          $scope.taskNextStatus = {};
          $scope.taskPreviousStatus = {};
       }
    }




    $scope.changeStatusOnKanban = function(task, direction)
    {
         if(direction == "next")
         {
             if(task.status.status == $scope.statuss[0].status)
             {
                task.status = $scope.statuss[1];
             }
             else if(task.status.status == $scope.statuss[1].status)
             {
                task.status = $scope.statuss[2];
             }
         }
         else if(direction == "previous")
         {
             if(task.status.status == $scope.statuss[1].status)
             {
                task.status = $scope.statuss[0];
             }
             else if(task.status.status == $scope.statuss[2].status)
             {
                task.status = $scope.statuss[1];
             }
         }
       
       $scope.editTaskChangeStatus(task);

    }



        // Get all the Todos
    $scope.getTasksDetailedList = function ()
    {
        GridDisplayService.getGridDisplayByTag("TodoByCurrentUser", 0)//replace with Params
            .then(
                function( tasks ) {
                    if(tasks!=undefined){
                        $scope.tasks = tasks.content;
                        $scope.statusTodoTasks = $scope.tasks[0];
                        $scope.statusInprogressTasks = $scope.tasks[1];
                        $scope.statusCompletedTasks = $scope.tasks[2];
                    }
                }
            );
    }
    
    $scope.getTasksDetailedList();

    $scope.getStatussDetailedList = function ()
    {
        StatusService.getAllStatuss()//replace with Params
            .then(
                function( statuss ) {
                    if(statuss!=undefined){
                        $scope.statuss = statuss;
                    }
                }
            );
    }
    
    $scope.getStatussDetailedList();

    
    $scope.addTask = function(task)
    {
          TodoService.createTodo(task)
          .then(
              function( data ) {
                if(data!=undefined){
                    $scope.setShowKanban();
                    $.bootstrapGrowl("Task added");
                }
              });
    }
     

    //Edit a task
    $scope.editTask = function (task)
    {
        TodoService.updateTodo(task)//replace with Params
            .then(
                function( data ) {
                    if(data!=undefined){
                        $scope.setShowKanban();
                        $.bootstrapGrowl("Changes saved");
                    }
                }
            );
    }


    $scope.editTaskChangeStatus = function (task)
    {
        TodoService.updateTodo(task)//replace with Params
            .then(
                function( data ) {
                    if(data!=undefined){
                        $scope.setShowKanban();
                    }
                }
            );
    }

    //Delete a task
    $scope.deleteTask = function (taskId)
    {
        TodoService.deleteTodoById(taskId)//replace with Params
            .then(
                function( status ) {
                    if(status!=undefined){
                        $scope.setShowKanban();
                        $.bootstrapGrowl("Task deleted");
                    }
                }
            );
    }




}]);