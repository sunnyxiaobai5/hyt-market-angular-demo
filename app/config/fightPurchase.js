(function () {
    'use strict';

    angular.module('myApp.fightPurchase', ['ui.router'])

        .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

            $urlRouterProvider.when("/main", "/main/fightPurchase/menu_1");
            $urlRouterProvider.when("/main/fightPurchase", "/main/fightPurchase/menu_1");

            $stateProvider
                .state('fightPurchase', {
                    parent: 'main',
                    url: '/fightPurchase',
                    data: {
                        stateToGo: 'fightPurchase.menu_1'
                    }
                })
                .state('fightPurchase.menu_1', {
                    parent: 'fightPurchase',
                    url: '/menu_1',
                    views: {
                        'content@main': {
                            templateUrl: 'html/fightPurchase/systemConfigForward.html'
                        }
                    },
                    data: {
                        pageTitle: '文案设置'
                    }
                })
                .state('fightPurchase.menu_2', {
                    parent: 'fightPurchase',
                    url: '/menu_2',
                    views: {
                        'content@main': {
                            templateUrl: 'html/fightPurchase/fightPurchaseForward.html'
                        }
                    },
                    data: {
                        pageTitle: '商品管理'
                    }
                })
                .state('fightPurchase.menu_3', {
                    parent: 'fightPurchase',
                    url: '/menu_3',
                    views: {
                        'content@main': {
                            templateUrl: 'html/fightPurchase/fightPurcRecList.html'
                        }
                    },
                    data: {
                        pageTitle: '拼购订单'
                    }
                })
                .state('fightPurchase.menu_4', {
                    parent: 'fightPurchase',
                    url: '/menu_4',
                    views: {
                        'content@main': {
                            templateUrl: 'html/fightPurchase/refundStatistics.html'
                        }
                    },
                    data: {
                        pageTitle: '退款统计'
                    }
                });
        }]);
})();
