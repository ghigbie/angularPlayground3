/* global angular*/

(function() {
    var meanApp = angular.module('meanApp', ['ngRoute']);
    
    meanApp.config(function($routeProvider){
       $routeProvider
            .when('/', {
                template: '<h1>This is the MAIN page</h1>'
            })
            .when('/about', {
                template: '<h1>This is the ABOUT page</h1>'
            });
    });
}());
