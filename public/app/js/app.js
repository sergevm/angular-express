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
  $routeProvider.when('/', {templateUrl: 'home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/projects', {templateUrl: 'projects.html', controller: 'ProjectCtrl'});
  $routeProvider.when('/companies', {templateUrl: 'companies.html', controller: 'CompanyCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
