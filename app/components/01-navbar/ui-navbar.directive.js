(function () {
    'use strict';

    angular.module('myApp.utils').directive('uiNavbar', ['Menu', function (Menu) {
        return {
            scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'components/01-navbar/ui-navbar.html',
            link: function ($scope) {
                $scope.menus = Menu.getModules();
            }
        };
    }]);
})();