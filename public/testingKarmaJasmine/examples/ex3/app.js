'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngMockE2E','ngRoute','myApp.view2']);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view2'});
  }]);
//Observe: This requires the injection of ngMockE2E, see top
app.run(['$httpBackend', function ($httpBackend) {
    $httpBackend.whenGET('api/demouser').respond({message: "This message was delivered via a REST call accesible by only authenticated USERS"});
    $httpBackend.whenGET("view2.html").passThrough();
  }]);


