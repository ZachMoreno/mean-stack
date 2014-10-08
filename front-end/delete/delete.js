'use strict';

angular.module('appName.delete', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/delete', {
		templateUrl: 'delete/delete.html',
		controller: 'DeleteCtrl'
	});
}])

.controller('DeleteCtrl', ['$scope', function($scope) {
	$scope.pageTitle = "Delete";
}]);