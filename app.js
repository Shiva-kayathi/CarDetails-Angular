var app = angular.module('Cars', []);

app.controller(
	'carsCtrl',
	function($scope, $http)
	{
		$scope.yourName = 'Shiva';
		$scope.sortType     = 'name'; // set the default sort type
  		$scope.sortReverse  = false;  // set the default sort order
  		$scope.searchByTerm   = '';     // set the default search/filter term

		$http.get("https://mobiledev.sunovacu.ca/api/Values/GetCars").then(
			function (response)
			{
	      		$scope.cars = response.data;
	      		console.log('data', response.data);
  			}
  		);
	}
);