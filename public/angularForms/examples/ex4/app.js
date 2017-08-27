
angular.module('formDemoApp', [])
  .controller('MainCtrl', [function() {
    var self = this;
    self.submit = function() {
      self.saved = angular.copy(self.user);
      self.user = {};
      self.f1.$setUntouched();
    };
  }]);