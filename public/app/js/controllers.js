'use strict';

/* Controllers */

var app = angular.module('demo.controllers', []);

app.controller('ProjectCtrl', ['$scope', function($scope) {
    $scope.projects = [
        {'name': 'Project 1', 'description': 'This is the description for project 1.'},
        {'name': 'Project 2', 'description': 'This is the description for project 2.'},
        {'name': 'Project 3', 'description': 'This is the description for project 3.'},
        {'name': 'Project 4', 'description': 'This is the description for project 4.'}
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

app.controller('CollapseCtrl', function($scope) {
    $scope.isCollapsed = true;
});
