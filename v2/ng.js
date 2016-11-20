/*global angular*/
var clientApp = angular.module('clientApp', []);

clientApp.controller('sidebarsCtrl', function ($scope, $window) {
    'use strict';



    $scope.sideBar1 = 'active'; //default, when page is loaded
    $scope.toggleSidebar = function () {
        //flip flop
        if ($scope.sideBar === 'active') {
            $scope.sideBar = '';
        } else {
            $scope.sideBar = 'active';
        }
        console.log('sideBar: ', $scope.sideBar);
    };



    /*** responsive views ***/
    var adjustView = function (w) {
        // console.log(w);
        if (w < 768) {
            $scope.sideBar = '';

            if (w < 480) {
                $scope.pageSidebars = {'margin-left': '-100px'};
                $scope.pageContent = {'margin-left': '0px'};
                $scope.sidebarsButton = {position: 'relative', left: '110px', top: '10px'};
            } else {
                $scope.pageSidebars = {};
                $scope.pageContent = {'margin-left': '200px'};
                $scope.sidebarsButton = {visibility: 'hidden'};
            }

        } else {
            $scope.sideBar = 'active';
        }

        // $scope.$apply();
    };

    //on page load
    adjustView($window.innerWidth);

    //on page resizing
    angular.element($window).bind('resize', function () {
        var w = $window.innerWidth;
        adjustView(w);
        $scope.$apply();
    });

    //show/hide both sidebars
    $scope.toggleSidebars = function () {
        $scope.sidebarsVisible = !$scope.sidebarsVisible;

        if ($scope.sidebarsVisible) {
            $scope.pageSidebars = {};
            $scope.pageContent = {};
        } else {
            $scope.pageSidebars = {'margin-left': '-100px'};
            $scope.pageContent = {'margin-left': '0px'};
        }

    };




});
