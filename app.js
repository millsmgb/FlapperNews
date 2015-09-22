var app = angular.module('flapperNews', []);

//test

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'Hello world!';
	}
]);