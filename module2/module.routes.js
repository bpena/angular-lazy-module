(function() {
    var dependencies = [
        './module'
    ];

    define(dependencies, function(module) {
        'use strict';

        module.config(config);

        function config($ocLazyLoadProvider, $stateProvider) {

            $ocLazyLoadProvider.config({
                debug: true,
                modules: [{
                    name: 'module2',
                    files: ['module2/module.js']
                }]
            });

            $stateProvider
                .state('module2', {
                    url: '/module2',
                    templateUrl: 'module2/module2.html',
                    controller: 'module2Controller',
                    controllerAs: 'ctrl',
                    resolve: {
                        load: function ($ocLazyLoad) {

                            return $ocLazyLoad.load({
                                files: [
                                    'module2/module.controller.js',
                                    'module2/directive2.js'
                                ]
                            });
                        }
                    }
                });
        };

    })
})();