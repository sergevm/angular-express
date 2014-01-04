'use strict';

angular.module('demo').config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/home/index.html', controller: 'HomeCtrl'});
  $routeProvider.when('/projects', {templateUrl: 'views/projects/list.html', controller: 'ProjectCtrl'});
  $routeProvider.when('/companies', {templateUrl: 'views/companies/list.html', controller: 'CompanyCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
