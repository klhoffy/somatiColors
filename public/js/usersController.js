angular.module('SomatiColors')
	.controller('usersController', usersController)
	.controller('usersProfileController', usersProfileController)

usersController.$inject = ['userFactory', '$window']
usersProfileController.$inject = ['userFactory','$stateParams','$location']

function usersController(userFactory, $window, $timeout){
	var self = this
	self.name = 'Car List'
	self.api = userFactory
	self.cars = []
	self.newCar = {}

	self.api.list().success(function(response){
		self.cars = response
	})

	self.addCar = function(make,model,year){
		var data = {make: make, model: model, year: year}
		self.api.addCar(data).then(function success(response){
			self.cars.push(response.data.car)
			self.newCar = {}
			$window.document.querySelectorAll('#new-car-form input')[0].focus()
		})
	}
}

function usersProfileController(carsFactory,$stateParams,$location){
	var self = this
	self.name = 'Car Detail'
	self.api = carsFactory
	self.car = null
	self.editing = false
	self.showCar = function(carId){
		self.api.show(carId).success(function(response){
			self.car = response
			console.log(response)
		})
	}
	self.showCar($stateParams.carId)

	self.updateCar = function(carId, make, model, year){
		var data = {make: make, model: model, year: year}
		self.api.updateCar(carId,data).success(function(response){
			console.log(response)
			self.car = response
			self.editing = false
		})
	}

	self.removeCar = function(carId){
		self.api.removeCar(carId).success(function(response){
			console.log(response)
			$location.path('/cars')
		})
	}
}