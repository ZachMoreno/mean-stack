'use strict';

angular.module('appName.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'views/home/home.html',
		controller: 'HomeCtrl'
	});
}])

.controller('HomeCtrl', ['$scope', '$timeout', 'toaster', 'ngProgress', function($scope, $timeout, toaster, ngProgress) {
	$scope.pageTitle = "Home";

	$scope.fabClick = function(){
		// toaster.pop('success', "FAB Clicked", "So cool");
		ngProgress.color('#FDD835');
		ngProgress.height('2px');
		ngProgress.start();
		ngProgress.complete();
	};
}]);