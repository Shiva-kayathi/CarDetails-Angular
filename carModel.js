var app = angular.module('cars', []);
app.service('CarService', [

	function() 
	{
		/**
	     * Constructor, with class name
	     */
		function Car(name, model, engine, color, mileage)
		{
			// Public properties, assigned to the instance ('this')
			this.name = name;
			this.model = model;
			this.engine = engine;
			this.color = color;
			this.mileage = mileage;
		}

		

		/**
	     * Return the constructor function
	     */
		return Car;
	}
]);