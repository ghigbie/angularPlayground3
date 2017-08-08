/* global angular */

(function(){
    var MeanController2 = function(){
        var vm = this;
        vm.name = 'Trevor';
    };
    
    MeanController2.$inject = ['$scope'];
    
    angular.module('meanApp')
        .controller('MeanController2', MeanController2);
});