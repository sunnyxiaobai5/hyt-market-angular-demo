(function () {
    'use strict';

    angular.module('myApp.optproduct', ['ui.router'])

        .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

            $urlRouterProvider.when("/main", "/main/optproduct/menu_1");

            $urlRouterProvider.when("/main/optproduct", "/main/optproduct/menu_1");

            $stateProvider
                .state('optproduct', {
                    parent: 'main',
                    url: '/optproduct'
                })
                .state('optproduct.menu_1', {
                    parent: 'optproduct',
                    url: '/menu_1',
                    views: {
                        'content@main': {
                            templateUrl: 'html/optproduct/optproductManage.html'
                        }
                    },
                    data: {
                        pageTitle: '优品管理'
                    }
                })
                .state('optproduct.menu_1.edit', {
                    parent: 'optproduct.menu_1',
                    url: '/edit',
                    views: {
                        'content@main': {
                            templateUrl: 'html/optproduct/optproductEdit.html'
                        }
                    },
                    data: {
                        pageTitle: '优品管理'
                    }
                })
        }]);
})();

