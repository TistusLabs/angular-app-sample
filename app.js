/* use strict */
var app = angular.module('MyFirstApp', ['ngMaterial', 'ui.router', 'ngAnimate']);

app.controller("MainCtrl", function ($scope, $state) {
    $scope.hello = "Hello work";

    $scope.changeURL = function (url) {
        $state.go(url);
    };
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/about');
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'partials/about.html',
        controller: 'MainCtrl'
    }).state('gallery', {
        url: '/gallery',
        templateUrl: 'partials/gallery.html',
        controller: 'MainCtrl'
    }).state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html',
        controller: 'MainCtrl'
    });
});