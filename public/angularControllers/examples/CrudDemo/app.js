// declare a module
var myAppModule = angular.module('myApp', []);

myAppModule.controller('ContactController', [function () {
  var uid = 1;
  var self = this;
  self.contacts = [
    {id: 0, 'name': 'Viral', 'email': 'hello@gmail.com', 'phone': '123-2343-44'}
  ];

  self.save = function () {
    if (self.newcontact.id == null) {
      self.newcontact.id = uid++;
      self.contacts.push(self.newcontact);
    } else {
      for (var i in self.contacts) {
        if (self.contacts[i].id == self.newcontact.id) {
          self.contacts[i] = self.newcontact;
        }
      }
    }
    self.newcontact = {};
  };

  self.delete = function (id) {

    for (var i in self.contacts) {
      if (self.contacts[i].id == id) {
        self.contacts.splice(i, 1);
        self.newcontact = {};
      }
    }
  };

  self.edit = function (id) {
    for (var i in self.contacts) {
      if (self.contacts[i].id == id) {
        self.newcontact = angular.copy(self.contacts[i]);
      }
    }
  };
}]);