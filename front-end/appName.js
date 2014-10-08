'use strict';

angular.module('appName', [
  // global dependencies
  'ngRoute',

  // views
  'appName.home'
])

// default route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);