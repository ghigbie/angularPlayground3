/* global angular */

(function(){
    var MeanController = function($http){
        var vm = this;
        vm.name = 'Sammy';
        
        $http.get('http://swapi-tpiros.rhcloud.com/films')
            .then(function(response){
                vm.films = response.data;
            });
            
    };
    
    MeanController.$inject = ['$scope'];
    
    angular.module('meanApp')
        .controller('MeanController', MeanController);
}());