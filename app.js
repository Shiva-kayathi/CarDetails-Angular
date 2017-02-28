var app = angular.module('cars', []);

app.controller(
	'carsCtrl',
	function($scope, $http)
	{
		$scope.sortType     = 'name'; // set the default sort type
  		$scope.sortReverse  = false;  // set the default sort order
  		$scope.searchByTerm   = '';     // set the default search/filter term

  		// Get the values of Cars using Http service
		$http.get("https://mobiledev.sunovacu.ca/api/Values/GetCars").then(
			function (response)
			{
				// pass the response data from service into View using scope 
	      		$scope.cars = response.data;
  			}
  		);
	}
);