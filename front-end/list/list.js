'use strict';

angular.module('appName.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/list', {
		templateUrl: 'list/list.html',
		controller: 'ListCtrl'
	});
}])

.controller('ListCtrl', ['$scope', function($scope) {
	$scope.pageTitle = "List";
}]);