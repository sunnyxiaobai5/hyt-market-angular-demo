(function () {
    'use strict';

    angular.module('myApp.utils').directive('uiSidebar', ['$state', 'Menu', function ($state, Menu) {
        return {
            scope: {}, // {} = isolate, true = child, false/undefined = no change
            restrict: 'AE',
            templateUrl: 'components/02-sidebar/ui-sidebar.html',
            controller: function ($scope, $element, $attrs, $transclude) {
                var menus = [
                    [
                        {name: '文案设置', state: 'fightPurchase.menu_1', icon: 'icon-dashboard'},
                        {name: '商品管理', state: 'fightPurchase.menu_2', icon: 'icon-text-width'},
                        {name: '拼购订单', state: 'fightPurchase.menu_3', icon: 'icon-desktop'},
                        {name: '退款统计', state: 'fightPurchase.menu_4', icon: 'icon-desktop'},
                        {name: '数据统计', state: 'nothing', icon: 'icon-dashboard'}
                    ],
                    [
                        {name: '优品管理', state: 'optproduct.menu_1', icon: 'icon-dashboard'}
                    ],
                    [
                        {name: '云说管理', state: 'cloudSaid.menu_1', icon: 'icon-dashboard'}
                    ],
                    [
                        {name: '券包管理'},
                        {name: '注册送券'},
                        {name: '购物送券'},
                        {name: '渠道合作'},
                        {name: '优惠券使用说明'}
                    ],
                    [
                        {name: '满减包邮'}
                    ]
                ];

                var getSystemState = function () {
                    var state = $state.current;
                    while (state.parent !== 'main') {
                        state = $state.get(state.parent);
                    }
                    return state;
                };


                $scope.$watch(getSystemState, function (newValue, oldValue) {
                    $scope.menus = Menu.getSidebar(newValue.name);
                });
            }
        };
    }]);
})();