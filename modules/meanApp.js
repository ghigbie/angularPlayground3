/* global angular*/

(function() {
    var meanApp = angular.module('meeanApp', ['ngRoute']);
    
    meanApp.config(function($routeProvider){
       $routeProvider
            .when('/', {
                template: '<h1>This is the main page</h1>'
            })
            .when('/about', {
                template: '<h1>This is the about page</h1>'
            });
    });
}());
