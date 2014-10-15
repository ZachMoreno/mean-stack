'use strict';

angular.module('appName.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'views/home/home.html',
		controller: 'HomeCtrl'
	});
}])

.controller('HomeCtrl', ['$scope', 'toaster', function($scope, toaster) {
	$scope.pageTitle = "Home";

	$scope.fabClick = function(){
		toaster.pop('success', "FAB Clicked", "So cool");
	};
}]);