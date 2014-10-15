'use strict';

angular.module('appName.create', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/create', {
		templateUrl: 'views/create/create.html',
		controller: 'CreateCtrl'
	});
}])

.controller('CreateCtrl', ['$scope', 'toaster', function($scope, toaster) {
	$scope.pageTitle = "Create";

	$scope.fabClick = function(){
		toaster.pop('success', "FAB Clicked", "So cool");
	};
}]);