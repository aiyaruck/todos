angular.module('todoApp', [])
    .service('todoService', function() {
        var self = this
        self.todo = [{
            title: 'Somnuek',
            complete: false
        }, {
            title: 'Aiyaruck',
            complete: true
        }]

        self.list = function() {
            return self.todo
        }
        self.submit = function(Todo) {
            self.todo.push(Todo)
        }

        self.Check = function(mes) {
            if (mes.complete === false) {
                mes.complete = true
            } else if (mes.complete === true) {
                mes.complete = false
            }
        }
    })
    .controller('listTodoController', function($scope, todoService) {
        $scope.todo = todoService.list()
        $scope.Check = function(mes) {
            todoService.Check(mes)
        }
    })
    .controller('addTodoController', function($scope, todoService) {
        $scope.title = ' '
        $scope.submit = function() {
            if ($scope.title !== ' ') {
                var Todo = {
                    title: $scope.title,
                    complete: false
                }
                todoService.submit(Todo);
                reset();
            }
        }

        function reset() {
            $scope.title = ' '
        }
    })
