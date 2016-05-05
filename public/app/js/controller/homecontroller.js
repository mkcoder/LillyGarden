var home = angular.module('home', ['ngResource', 'ngRoute']);

home.config(function ($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {
			templateUrl: '/garden/home',
			controller: 'home'
		})

});

home.controller('home', function ($scope, $productService ) {
	$scope.model = $productService;
});