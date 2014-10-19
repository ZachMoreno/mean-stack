'use strict';

angular.module('appName.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/list', {
		templateUrl: 'views/list/list.html',
		controller: 'ListCtrl'
	});
}])

.controller('ListCtrl', ['$scope', '$resource', 'toaster', 'Items', function($scope, $resource, toaster, Items) {
	$scope.pageTitle = "List";

	$scope.fabClick = function(){
		toaster.pop('success', "FAB Clicked", "So cool");
	};

	// query for all items & bind to view
	$scope.items = Items.query();
}]);