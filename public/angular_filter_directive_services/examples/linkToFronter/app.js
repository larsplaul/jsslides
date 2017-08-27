var app = angular.module("directiveDemo1", []);

app.directive("linkToFronter", function () {
  return {
    restrict: 'EA',
    replace: 'true',
    template: '<a href="https://fronter.com/cphbusiness/">Link to Fronter </a>'
  };
});

app.directive("linkToFronter2", function () {
  return {
    restrict: 'EA',
    replace: 'false',
    template: '<a href="https://fronter.com/cphbusiness/">Link to Fronter </a>'
  };
});