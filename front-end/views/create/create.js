'use strict';

angular.module('appName.create', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/create', {
		templateUrl: 'views/create/create.html',
		controller: 'CreateCtrl'
	});
}])

.controller('CreateCtrl', ['$scope', function($scope) {
	$scope.pageTitle = "Create";
}]);