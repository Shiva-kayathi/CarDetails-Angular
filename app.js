var app = angular.module('Cars', []);

app.controller(
	'carsCtrl',
	function($scope, $http)
	{
		$scope.yourName = 'Shiva';
		$http.get("https://mobiledev.sunovacu.ca/api/Values/GetCars").then(
			function (response) {
	      		$scope.cars = response.data;
	      		console.log('data', response.data);
  			}
  		);
	}
);