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

    $scope.toggleSidebar = function () {
        $scope.hidesidebarClass = (!$scope.hidesidebarClass)
            ? 'hidesidebar'
            : '';
    };
});


clientApp.controller('sidebarCtrl', function ($scope) {
    'use strict';

    $scope.toggleChild = function ($event) {
        // console.log(angular.element($event.currentTarget).parent());
        if (angular.element($event.currentTarget).parent('li').hasClass('active')) {
            angular.element($event.currentTarget).parent('li').removeClass('active');
        } else {
            angular.element($event.currentTarget).parent('li').addClass('active');
        }
    };
});
