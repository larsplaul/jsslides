
angular.module('formDemoApp', [])
  .controller('MainCtrl', ["$window", function($window) {
    var self = this;
    self.submit = function() {
      self.saved = angular.copy(self.user);
      self.user = {};
    };
  }]);