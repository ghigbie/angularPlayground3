/* global angular */

(function(){
    var MeanController1 = function(){
        var vm = this;
        vm.name = 'Peter';
    };
    
    MeanController1.$inject = ['$scope'];
    
    angular.module('meanApp')
        .controller('MeanController1', MeanController1);
}());