angular.module("mainApp", ['ngRoute', 'ui.router']); 

angular.module('mainApp').config(function ($routeProvider, $httpProvider, $stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html',
    controller: 'studentCtrl as vm'    
  });

  $urlRouterProvider.otherwise('/home');
});