/* global angular */

(function() {
    var MeanController3 = function(){
        var vm = this;
        vm.name = 'Steve';
    };
    
    MeanController3.$inject = ['$scope'];
    
    angular.module('meanApp')
        .controller('MeanController1', MeanController3);
}());