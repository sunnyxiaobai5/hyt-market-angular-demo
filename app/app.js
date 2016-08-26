(function () {
    'use strict';

    angular.module('myApp', ['ui.router', 'myApp.utils', 'myApp.fightPurchase', 'myApp.optproduct'])
        // angular.module('myApp', ['ui.router'])
        .run(function ($rootScope, $window) {

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                $rootScope.toState = toState;
                $rootScope.toStateParams = toParams;

                console.log("$stateChangeStart")
            });

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                $rootScope.previousStateName = fromState.name;
                $rootScope.previousStateParams = fromParams;
                if (toState && toState.data && toState.data.pageTitle) {
                    $window.document.title = toState.data.pageTitle;
                }

                console.log("$stateChangeSuccess");
            });

            $rootScope.$on('$stateNotFound', function (event, toState, toParams, fromState, fromParams) {

                console.log("$stateNotFound")
            });

            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {

                console.log("$stateChangeError")
            });

        })
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        '': {
                            templateUrl: 'home.html'
                        }
                    },
                    data: {
                        pageTitle: "营销系统首页"
                    }
                })
                .state('main', {
                    abstract: true,
                    url: '/main',
                    views: {
                        '': {
                            templateUrl: 'main.html'
                        }
                    },
                    data: {
                        pageTitle: "内容页面"
                    }
                })
                .state('500', {
                    url: '/500',
                    views: {
                        '': {
                            templateUrl: '500.html'
                        }
                    },
                    data: {
                        pageTitle: "500"
                    }
                })
                .state('404', {
                    url: '/404',
                    views: {
                        '': {
                            templateUrl: '404.html'
                        }
                    },
                    data: {
                        pageTitle: "404"
                    }
                })
                .state('nothing', {
                    parent: 'main',
                    url: '/nothing',
                    views: {
                        'content@main': {
                            templateUrl: 'nothing.html'
                        }
                    }
                });

        }]);
})();

