var app = angular.module('cars', []);

app.controller(
	'carsCtrl',
	function($scope, $http, Car)
	{
		$scope.sortType     = 'name'; // set the default sort type
  		$scope.sortReverse  = false;  // set the default sort order
  		$scope.searchByTerm   = '';     // set the default search/filter term
  		$scope.cars = new Array();

		$http.get("https://mobiledev.sunovacu.ca/api/Values/GetCars").then(
			function (response)
			{
	      	    var carDetails = response.data;
	      		angular.forEach(carDetails, 
	      			function(carDetail)
		      		{
		      			var car = new Car(carDetail.name, carDetail.model, carDetail.engine, carDetail.color, carDetail.mileage);
		      			$scope.cars.push(car);
		      		}
		      	);
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
		function Car(name, model, engine, color, mileage)
		{
			this.name = name;
			this.model = model;
			this.engine = engine;
			this.color = color;
			this.mileage = mileage;
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