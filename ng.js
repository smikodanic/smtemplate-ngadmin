/*global angular*/
var clientApp = angular.module('clientApp', []);



/************* CONTROLLERS *************/
clientApp.controller('topnavbarCtrl', function ($scope) {
    'use strict';

    $scope.toggleDropdownMenu = function () {
        $scope.openClass = (!$scope.openClass)
            ? 'open'
            : '';
    };

    $scope.toggleCollapsingMenu = function () {
        $scope.inClass = (!$scope.inClass)
            ? 'in'
            : '';
    };

});



clientApp.controller('mainCtrl', function ($scope) {
    'use strict';
    $scope.myVar = 'Something goood!';
});
