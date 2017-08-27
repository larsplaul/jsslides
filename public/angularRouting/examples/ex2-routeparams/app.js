var app = angular.module('routeParam', ['ngRoute']);
//routeProvider with parameters demo
app.config(function ($routeProvider,$locationProvider) {
  $routeProvider
    .when("/:firstName/:lastName", {
      template: "FirstName: {{first}}, Lastname: {{last}}",
      controller: "RouteParamController"
    })
    .when("/", {
      template: "Enter parameters to see routeParams in action"
    })
})
app.controller("RouteParamController",function($scope,$routeParams){
  $scope.first = $routeParams.firstName;
  $scope.last = $routeParams.lastName;
})
// End of demo
