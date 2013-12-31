'use strict';


// Declare app level module which depends on filters, and services
angular.module('demo', [
  'ngRoute',
  'demo.filters',
  'demo.services',
  'demo.directives',
  'demo.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'projects.html', controller: 'ProjectCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
