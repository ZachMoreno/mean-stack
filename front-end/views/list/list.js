'use strict';

angular.module('appName.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/list', {
		templateUrl: 'views/list/list.html',
		controller: 'ListCtrl'
	});
}])

.controller('ListCtrl', ['$scope', 'toaster', function($scope, toaster) {
	$scope.pageTitle = "List";

	$scope.fabClick = function(){
		toaster.pop('success', "FAB Clicked", "So cool");
	};
}]);