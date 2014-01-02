'use strict';

/* Controllers */

var app = angular.module('demo.controllers', []);

app.controller('ProjectCtrl', ['$scope', '$modal', function($scope, $modal) {
    $scope.projects = [
        {'name': 'Project 1', 'description': 'This is the description for project 1.'},
        {'name': 'Project 2', 'description': 'This is the description for project 2.'},
        {'name': 'Project 3', 'description': 'This is the description for project 3.'},
        {'name': 'Project 4', 'description': 'This is the description for project 4.'}
      ];

    var validate = function(project, $scope) {
        
        var result = true;

        $scope.validationerrors = [];

        if (project.name === undefined || project.name.length === 0) {
            $scope.validationerrors.push('Name must be specified');
            result = false;
        }

        return result;
    };


    $scope.edit = function(project) {

        var EditCtrl = function($scope, $modalInstance) {

            $scope.project = angular.copy(project);
            $scope.submitted = false;

            $scope.ok = function() {
                $scope.submitted = true;
                if (validate($scope.project, $scope)) {
                    angular.copy($scope.project, project);
                    $modalInstance.close();
                }
            };

            $scope.cancel = function() {
                $modalInstance.dismiss();
            };
        };

        var modalInstance = $modal.open({
            templateUrl: 'editproject.html',
            controller: EditCtrl
       });    
    };

    $scope.create = function() {
        
       var CreateCtrl = function($scope, $modalInstance, projects) {
            
            $scope.project = {'name': undefined, 'vat': undefined};
            $scope.projects = projects;
            $scope.submitted = false;

            $scope.ok = function() {

                $scope.submitted = true;
                if (validate($scope.project, $scope)) {
                    $scope.projects.push($scope.project);
                    $modalInstance.close();
                }
            };    

            $scope.cancel = function() {
                $modalInstance.dismiss();
            };
        };

        var modalInstance = $modal.open({
            templateUrl: 'editproject.html',
            controller: CreateCtrl,
            resolve: {
                projects: function() {
                    return $scope.projects;
                }
            }
        });
    };
    }
]);

app.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.counts = {
        'projects': 4,
        'companies': 2
    };
}]);

app.controller('CompanyCtrl', ['$scope', '$modal', function($scope, $modal) {

    $scope.companies = [
        {'name': 'Google', 'vat': '047712345678'},
        {'name': 'Apple', 'vat': '033454543454'}
    ];

    var validate = function(company, $scope) {
        
        var result = true;

        $scope.validationerrors = [];

        if (company.name === undefined || company.name.length === 0) {
            $scope.validationerrors.push('Name must be specified');
            result = false;
        }

        if (company.vat === undefined || company.vat.length === 0) {
            $scope.validationerrors.push('VAT number must be specified');
            result = false;
        }

       return result;
    };

    $scope.edit = function(company) {

        var EditCtrl = function($scope, $modalInstance) {

            $scope.company = angular.copy(company);
            $scope.submitted = false;

            $scope.ok = function() {

                $scope.submitted = true;

                if (validate($scope.company, $scope)) {
                    angular.copy($scope.company, company);
                    $modalInstance.close();
                };
            };

            $scope.cancel = function() {
                $modalInstance.dismiss();
            };
        };

        var modalInstance = $modal.open({
            templateUrl: 'editcompany.html',
            controller: EditCtrl
       });    
    };

    $scope.create = function() {
        
       var CreateCtrl = function($scope, $modalInstance, companies) {
            
            $scope.company = {'name': undefined};
            $scope.companies = companies;
            $scope.submitted = false;

            $scope.ok = function() {

                $scope.submitted = true;

                if (validate($scope.company, $scope)) {
                    $scope.companies.push($scope.company);
                    $modalInstance.close();
                }
            };    

            $scope.cancel = function() {
                $modalInstance.dismiss();
            };
        };

        var modalInstance = $modal.open({
            templateUrl: 'editcompany.html',
            controller: CreateCtrl,
            resolve: {
                companies: function() {
                    return $scope.companies;
                }
            }
        });
    };
}]);

app.controller('CollapseCtrl', function($scope) {
    $scope.isCollapsed = true;
});
