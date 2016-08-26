(function () {
    'use strict';

    angular.module('myApp.cloudSaid', ['ui.router'])

        .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

            $urlRouterProvider.when("/main", "/main/cloudSaid/menu_1");
            $urlRouterProvider.when("/main/cloudSaid", "/main/cloudSaid/menu_1");

            $stateProvider
                .state('cloudSaid', {
                    parent: 'main',
                    url: '/cloudSaid'
                })
                .state('cloudSaid.menu_1', {
                    parent: 'cloudSaid',
                    url: '/menu_1',
                    views: {
                        'content@main': {
                            templateUrl: 'html/cloudSaid/cloudSaidManage.html'
                        }
                    },
                    data: {
                        pageTitle: '云说管理'
                    }
                })
                .state('cloudSaid.menu_1.edit', {
                    parent: 'cloudSaid.menu_1',
                    url: '/edit',
                    views: {
                        'content@main': {
                            templateUrl: 'html/cloudSaid/cloudSaidManage-edit.html'
                        }
                    },
                    data: {
                        pageTitle: '云说管理'
                    }
                })
        }]);
})();

