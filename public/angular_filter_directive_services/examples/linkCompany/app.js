var app = angular.module("directiveDemo", []);

app.directive("companyInfo", function () {
  return {
    restrict: 'EA',
    scope: {
      name: "@",
      phone: "@",
      url : "@"
    },
    templateUrl: 'template.html'

  };
});
