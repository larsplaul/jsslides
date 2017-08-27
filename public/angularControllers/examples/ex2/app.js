var myApp = angular.module('spicyApp1', []);
//Use this as skeleton code for how to create controllers
myApp.controller('SpicyController', [function() {
  var self = this;
  self.spice = 'very';

  self.chiliSpicy = function() {
    self.spice = 'chili';
  };
  self.jalapenoSpicy = function() {
    self.spice = 'jalapeño';
  };
}]);