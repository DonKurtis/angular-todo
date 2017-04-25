angular.module('TodoApp', ['ngRoute', 'RouteControllers']);
 
angular.module('TodoApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/' , {
        templateUrl: 'Templates/home.html',
        controller: 'HomeController'
    })
    .when('/accounts/register', {
        templateUrl: 'Templates/register.html',
        controller: 'RegisterController'
    });
});