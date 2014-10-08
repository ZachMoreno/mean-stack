'use strict';

angular.module('appName.edit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/edit', {
		templateUrl: 'views/edit/edit.html',
		controller: 'EditCtrl'
	});
}])

.controller('EditCtrl', ['$scope', function($scope) {
	$scope.pageTitle = "Edit";
}]);