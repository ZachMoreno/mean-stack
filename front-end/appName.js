'use strict';

angular.module('appName', [
  // global dependencies
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'toaster',
  'ngProgress',

  // views
  'appName.home',
  'appName.create',
  'appName.edit',
  'appName.list',
  'appName.delete',
  'appName.style',

  // services
  'appName.coralService'
])

// default route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);