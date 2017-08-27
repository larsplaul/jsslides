var app = angular.module('directive2', []);

app.controller('Ctrl', function($scope) {
    $scope.person = {
        firstName: '',
        lastName: ''
    };
});

app.directive('personDetail',function(){
    return {
        restrict : 'E',
        replace : true,
        templateUrl: 'personDetail.html'
    };
});