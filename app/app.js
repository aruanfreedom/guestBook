'use strict';

// Declare app level module which depends on views, and components
angular.module('guestApp', ['ngRoute', 'ngMaterial']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'})
      .when('/', {
        templateUrl: 'components/guest/guestView.html',
        controller: 'guestCtrl'
      });



}]);
