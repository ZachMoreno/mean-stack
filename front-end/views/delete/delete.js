'use strict';

angular.module('appName.delete', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/delete', {
		templateUrl: 'views/delete/delete.html',
		controller: 'DeleteCtrl'
	});
}])

.controller('DeleteCtrl', ['$scope', '$resource', 'toaster', 'Items', function($scope, $resource, toaster, Items) {
	$scope.pageTitle = "Delete";

	$scope.fabClick = function(){
		toaster.pop('success', "FAB Clicked", "So cool");
	};

	// query for all items & bind to view
	$scope.items = Items.query();

	$scope.delete = function(item) { // Delete a item. Issues a DELETE to /api/movies/:id
		console.log(item);
		item.$delete(function() {
			toaster.pop('success', "Rad", "you successfully deleted " + item);
		});
  	};
}]);