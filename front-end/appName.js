'use strict';

angular.module('appName', [
  // global dependencies
  'ngRoute',
  'ngAnimate',
  'toaster',

  // views
  'appName.home',
  'appName.create',
  'appName.edit',
  'appName.list',
  'appName.delete'
])

// default route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);