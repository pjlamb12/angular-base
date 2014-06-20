angular.module('myApp.home',
	['myApp',])
.config(function($stateProvider){
	$stateProvider
		.state('home',{
			url: '/',
			templateUrl: 'js/home/home.html',
			controller: 'HomeController'
		});
})
.controller('HomeController', function($scope){
	$scope.hello = "Hello!";

});