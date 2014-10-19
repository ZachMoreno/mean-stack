'use strict';

angular.module('appName.create', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/create', {
		templateUrl: 'views/create/create.html',
		controller: 'CreateCtrl'
	});
}])

.controller('CreateCtrl', ['$scope', '$resource', '$location', 'toaster', 'Items', function($scope, $resource, $location, toaster, Items) {
	$scope.pageTitle = "Create";

	$scope.fabClick = function(){
		toaster.pop('success', "FAB Clicked", "So cool");
	};

	$scope.create = function() {
		if($scope.name == null) {
			toaster.pop('warning', "Please", "enter a name");
		}
		if($scope.type == null) {
			toaster.pop('warning', "Please", "enter a type");
		}

		var coral = new Items();
			coral.createdOn = Date.now();
			coral.name      = $scope.name;
			coral.type      = $scope.type;
			coral.$save(function() {
				// $location.path('/list');
				toaster.pop('success', "Awesome", "successfully created your new item");
			});
	}
}]);