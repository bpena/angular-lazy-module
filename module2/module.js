(function() {
    var dependencies =[
        'angular',

        'angularRoute',
        'ocLazyLoad'
    ];

    define(dependencies, function (angular) {
        'use strict';

        var module = angular
            .module('module2', ['ui.router', 'oc.lazyLoad'])
            .config(config);

        config.$inject = ['$stateProvider'];
        function config($stateProvider) {
            $stateProvider
                .state('module2', {
                    url: '/angular-lazy-module/module2',
                    templateUrl: '/angular-lazy-module/module2/module2.html',
                    controller: 'module2Controller',
                    controllerAs: 'ctrl',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {

                            return $ocLazyLoad.load({
                                files: [
                                    '/angular-lazy-module/module2/module.controller.js',
                                    '/angular-lazy-module/module2/directive2.js'
                                ]
                            });
                        }]
                    }
                });
        }

        return module;
    });
})();
