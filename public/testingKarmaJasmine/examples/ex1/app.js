var app = angular.module('MyApp', []);

app.controller('MyCtrl', function($scope) {
    $scope.name = "";

    $scope.$watch("name", function(newValue, oldValue) {
      if (newValue.length > 0) {
        $scope.greeting = "Greetings " + newValue;
      }
    });
  })
