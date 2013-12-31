'use strict';

/* Controllers */

var app = angular.module('demo.controllers', []);

app.controller('ProjectCtrl', ['$scope', function($scope) {
    $scope.projects = [
        {'name': 'Project 1'},
        {'name': 'Project 2'},
        {'name': 'Project 3'},
        {'name': 'Project 4'}
      ];
}]);

app.controller('HomeCtrl', ['$scope', function($scope) {
}
]);

app.controller('CompanyCtrl', ['$scope', function($scope) {
    window.$scope = $scope;
    $scope.companies = [
        {'name': 'Google'},
        {'name': 'Apple'}
    ];
}]);

