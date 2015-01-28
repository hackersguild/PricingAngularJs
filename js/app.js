var Pricing = angular.module('Pricing', []);
Pricing.controller('PricingController', function ($scope){
	$scope.prices = [
	{name:"Static", amount:300, active: false}, 
	{name:"Dynamic", amount:400, active: false},
	{name:"Free", amount:500, active: false},
	{name:"Food", amount:800, active: false}
	];

	$scope.toggle = function (entry){
		entry.active = !entry.active
		console.log(entry.active);
	}
});	
