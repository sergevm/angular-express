'use strict';

angular.module('demo.companies', []).controller('CompanyCtrl', ['$scope', '$modal', function($scope, $modal) {

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

