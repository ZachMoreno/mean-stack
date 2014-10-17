'use strict';

angular.module('appName.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/list', {
		templateUrl: 'views/list/list.html',
		controller: 'ListCtrl'
	});
}])

.controller('ListCtrl', ['$scope', '$resource', 'toaster', 'Corals', function($scope, $resource, toaster, Corals) {
	$scope.pageTitle = "List";

	$scope.fabClick = function(){
		toaster.pop('success', "FAB Clicked", "So cool");
	};

	// query for all corals & bind to view
	$scope.corals = Corals.query();
}]);