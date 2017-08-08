/* global angular */

(function(){
    var MeanController = function(){
        var vm = this;
        vm.name = 'Sammy';
    };
    
    MeanController.$inject = ['$scope'];
    
    angular.module('meanApp')
        .controller('MeanController', MeanController);
}());