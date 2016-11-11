angular.module('todoApp', [])
  .service('todoService', function (){
    var self = this
    self.todo = []

    self.list = function() {
        return self.todo
    }
    self.summit = function(Todo) {
        self.todo.push(Todo)
  }
})
    .controller('listTodoController', function($scope, todoService) {
       $scope.todo = todoService.list()
   })
   .controller('addTodoController', function($scope, todoService) {
           $scope.title = ' '
           $scope.submit = function() {
               if ($scope.title !== ' '){
                 var Todo = {title: $scope.title}
                 todoService.summit(Todo);
                  resetForm();
               }
           }

           function resetForm() {
               $scope.title = ' '
           }
       })
