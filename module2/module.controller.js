(function() {
    'use strict';

    var name = 'module2Controller';

    angular
        .module('module2')
        .controller(name, moduleController);

    function moduleController() {
        this.message = 'Hello from a lazy loaded controller';
    }
})();