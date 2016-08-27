(function () {
    'use strict';

    angular.module('myApp').factory('Menu', [function () {
        var menus = [
            {
                name: '拼购', state: 'fightPurchase',
                children: [
                    {name: '文案设置', state: 'fightPurchase.menu_1', icon: 'icon-dashboard'},
                    {name: '商品管理', state: 'fightPurchase.menu_2', icon: 'icon-text-width'},
                    {name: '拼购订单', state: 'fightPurchase.menu_3', icon: 'icon-desktop'},
                    {name: '退款统计', state: 'fightPurchase.menu_4', icon: 'icon-desktop'},
                    {name: '数据统计', state: 'nothing', icon: 'icon-dashboard'}
                ]
            },
            {
                name: '优品', state: 'optproduct',
                children: [
                    {name: '优品管理', state: 'optproduct.menu_1', icon: 'icon-dashboard'}
                ]
            },
            {
                name: '云说', state: 'cloudSaid',
                children: [
                    {name: '云说管理', state: 'cloudSaid.menu_1', icon: 'icon-dashboard'}
                ]
            },
            {
                name: '抢购', state: 'nothing',
                children: [
                    {name: '券包管理'},
                    {name: '注册送券'},
                    {name: '购物送券'},
                    {name: '渠道合作'},
                    {name: '优惠券使用说明'}
                ]
            },
            {
                name: '优惠券', state: 'nothing',
                children: [
                    {name: '满减包邮'}
                ]
            }
        ];
        return {
            /**
             * 获取一级菜单
             * @returns {*[]}
             */
            getModules: function () {
                return menus;
            },
            
            /**
             * 获取某一级菜单下的二级菜单
             * @param parentStateName 顶级菜单路由名称
             * @returns {*}
             */
            getSidebar: function (parentStateName) {
                var module = menus.filter(function (menu) {
                    return menu.state == parentStateName;
                })[0];
                return module.children;
            }
        };
    }]);
})();

