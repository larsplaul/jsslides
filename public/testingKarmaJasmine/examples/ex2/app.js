var app = angular.module('MyApp', []);

app.controller('View2Ctrl',['$scope','InfoFactory','InfoService',
  function($scope,InfoFactory,InfoService) {
    $scope.infoFactory = InfoFactory.getInfo();
    $scope.infoService = InfoService.getInfo();
  }]);

app.service('InfoService', [function () {
  var info = "Hello World from a Service";
  this.getInfo = function(){return info;}
}]);

app.factory('InfoFactory', function () {
  var info = "Hello World from a Factory";
  return {
    getInfo: function getInfo() {return info;}
  }
});