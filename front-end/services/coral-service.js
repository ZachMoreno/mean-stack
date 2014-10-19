'use strict';

angular.module('appName.coralService', [])

.factory('Corals', ['$resource', function($resource) {
	return $resource('http://localhost:7000/api/v1/corals');
}]);