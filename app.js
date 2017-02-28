var app = angular.module('cars', []);

app.controller(
	'carsCtrl',
	function($scope, $http, Car)
	{
		$scope.sortType     = 'name'; // set the default sort type
  		$scope.sortReverse  = false;  // set the default sort order
  		$scope.searchByTerm   = '';     // set the default search/filter term

		$http.get("https://mobiledev.sunovacu.ca/api/Values/GetCars").then(
			function (response)
			{
	      	    var carDetails = response.data;
	      		
	      		$scope.cars = new Car(carDetails);
	      		console.log($scope.cars);
	        
	      		
  			}
  		);

  		$scope.arrFromMyObj = Object.keys($scope.cars).map(function(key) {
    		return $scope.cars[key];
    	});
	}
);

app.factory('Car', [

	function() 
	{
		/**
	     * Constructor, with class name
	     */
		function Car(carData)
		{
			this.setData(carData);
		};

		Car.prototype = {
	        setData: function(carData) {
	            angular.extend(this, carData);
	        }
		};

		/**
	     * Return the constructor function
	     */
		return Car;
	}
]);