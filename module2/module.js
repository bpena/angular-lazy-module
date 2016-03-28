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
                    url: '/copia/module2',
                    templateUrl: '/copia/module2/module2.html',
                    controller: 'module2Controller',
                    controllerAs: 'ctrl',
                    resolve: {
                        load: ['$ocLazyLoad', function ($ocLazyLoad) {

                            return $ocLazyLoad.load({
                                files: [
                                    '/copia/module2/module.controller.js',
                                    '/copia/module2/directive2.js'
                                ]
                            });
                        }]
                    }
                });
        }

        return module;
    });
})();
