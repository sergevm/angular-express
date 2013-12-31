'use strict';

/* Controllers */

angular.module('demo.controllers', []).
  controller('ProjectCtrl', ['$scope', function($scope) {
    $scope.projects = [
        {'name': 'Project 1'},
        {'name': 'Project 2'},
        {'name': 'Project 3'},
        {'name': 'Project 4'}
      ];
}]);
