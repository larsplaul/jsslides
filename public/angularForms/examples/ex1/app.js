
angular.module('formDemoApp', [])
  .controller('MainCtrl', ["$window", function($window) {
    var self = this;
    self.submit = function() {
      $window.alert('User clicked submit with: '+
        JSON.stringify(self.user));
    };
  }]);