(function() {
    'use strict';
    angular
        .module('module2')
        .directive('greeting', directiva);

    function directiva(){

        return {
            template:'<div>{{message}}</div>',

            link:function($scope){
                $scope.message = 'hello from a directive a';
            }};
    }
})();

//define(['angular'], function(angular) {

//})
