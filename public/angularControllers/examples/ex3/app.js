var app = angular.module('todoApp1', []);

app.controller('TodoCtrl', [function() {
  var self = this;
  self.todos = ["Learn Angularjs",
                "Learn about Scopes",
                "Learn about Controllers"];

  self.addTodo = function() {
    self.todos.push(self.newtodo);
    self.newtodo = "";
  }
}]);