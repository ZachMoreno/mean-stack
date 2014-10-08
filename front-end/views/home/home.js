'use strict';

angular.module('appName.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'views/home/home.html',
		controller: 'HomeCtrl'
	});
}])

.controller('HomeCtrl', ['$scope', function($scope) {
	$scope.pageTitle = "Home";
}]);