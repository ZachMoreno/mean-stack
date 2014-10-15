'use strict';

angular.module('appName.delete', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/delete', {
		templateUrl: 'views/delete/delete.html',
		controller: 'DeleteCtrl'
	});
}])

.controller('DeleteCtrl', ['$scope', 'toaster', function($scope, toaster) {
	$scope.pageTitle = "Delete";

	$scope.fabClick = function(){
		toaster.pop('success', "FAB Clicked", "So cool");
	};
}]);