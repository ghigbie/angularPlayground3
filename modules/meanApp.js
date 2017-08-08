/* global angular*/

(function() {
    var meanApp = angular.module('meanApp', ['ngRoute']);
    
    meanApp.config(function($routeProvider){
       $routeProvider
            .when('/', {
                controller: 'MeanController',
                controllerAs: 'vm',
                templateUrl: 'templates/main.html'
            })
            .when('/about', {
                controller: 'MeanController1',
                controllerAs: 'vm',
                templateUrl: 'templates/about.html'
            })
            .when('/products', {
                controller: 'MeanController2',
                controllerAs: 'vm',
                templateUrl: 'templates/products.html'
            })
            .otherwise({
                controller: 'MeanController3',
                controllerAs: 'vm',
                templateUrl: 'templates/notfound.html'
            });
    });
}());
