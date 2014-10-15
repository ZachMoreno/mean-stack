'use strict';

angular.module('appName.edit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/edit', {
		templateUrl: 'views/edit/edit.html',
		controller: 'EditCtrl'
	});
}])

.controller('EditCtrl', ['$scope', 'toaster', function($scope, toaster) {
	$scope.pageTitle = "Edit";

	$scope.fabClick = function(){
		toaster.pop('success', "FAB Clicked", "So cool");
	};
}]);