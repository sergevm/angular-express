'use strict';

angular.module('demo.projects', []).controller('ProjectCtrl', ['$scope', '$modal', function($scope, $modal) {
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

        $modal.open({
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

        $modal.open({
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
