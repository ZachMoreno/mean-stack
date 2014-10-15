'use strict';

angular.module('appName.style', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/style', {
		templateUrl: 'views/style/style.html',
		controller: 'StyleCtrl'
	});
}])

.controller('StyleCtrl', ['$scope', 'toaster', function($scope, toaster) {
	$scope.pageTitle = "Style Guide";

	$scope.fabClick = function(){
		toaster.pop('success', "FAB Clicked", "So cool");
	};
}]);