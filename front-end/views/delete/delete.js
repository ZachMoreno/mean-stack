'use strict';

angular.module('appName.delete', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/delete', {
		templateUrl: 'views/delete/delete.html',
		controller: 'DeleteCtrl'
	});
}])

.controller('DeleteCtrl', ['$scope', '$resource', 'toaster', 'Corals', function($scope, $resource, toaster, Corals) {
	$scope.pageTitle = "Delete";

	$scope.fabClick = function(){
		toaster.pop('success', "FAB Clicked", "So cool");
	};

	// query for all corals & bind to view
	$scope.corals = Corals.query();

	$scope.delete = function(coral) { // Delete a coral. Issues a DELETE to /api/movies/:id
		console.log(coral);
		coral.$delete(function() {
			toaster.pop('success', "Rad", "you successfully deleted " + coral);
		});
  	};
}]);