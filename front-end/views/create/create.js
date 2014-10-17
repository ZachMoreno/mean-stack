'use strict';

angular.module('appName.create', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/create', {
		templateUrl: 'views/create/create.html',
		controller: 'CreateCtrl'
	});
}])

.controller('CreateCtrl', ['$scope', '$resource', 'toaster', 'Corals', function($scope, $resource, toaster, Corals) {
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

		var coral = new Corals();
			coral.name = $scope.name;
			coral.type = $scope.type;
			coral.$save(function() {
				toaster.pop('success', "Awesome", "successfully created your new coral");
			});
	}
}]);