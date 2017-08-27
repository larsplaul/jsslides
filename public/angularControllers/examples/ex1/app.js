// declare a module
var myAppModule = angular.module('myApp', []);

// configure the module.
myAppModule.controller('MyController', function($scope) {
  $scope.firstName = "Lars";
  $scope.lastName = "Mortensen";
});