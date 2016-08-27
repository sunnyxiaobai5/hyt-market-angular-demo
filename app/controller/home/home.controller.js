'use strict';

angular.module('myApp').controller('HomeController', ['$scope', 'Menu', function ($scope, Menu) {
    $scope.menus = Menu.getModules();
}]);