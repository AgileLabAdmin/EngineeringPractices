'use strict';

// Declare app level module which depends on views, and components
angular.module('EZBank', [
  'ngRoute',
   'EZBank.newApplication',
   'toaster',
    'EZBank.services',
  'EZBank.utils'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.otherwise({redirectTo: '/newApplication'});


}]);
