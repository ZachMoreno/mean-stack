'use strict';

angular.module('appName.itemService', [])

.factory('Items', ['$resource', function($resource) {
	return $resource('http://localhost:7000/api/v1/items');
}]);