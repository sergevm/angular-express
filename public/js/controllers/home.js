'use strict';

angular.module('demo.home', []).controller('HomeCtrl', ['$scope', function($scope) {
    $scope.counts = {
        'projects': 4,
        'companies': 2
        };
    }
]);
