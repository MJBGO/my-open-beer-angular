var appBeers = angular.module("BeersApp", []).
controller("BeersController", ["$scope","rest","$timeout","$location","config","$route","save","user", require("./beersController")]).
controller("BeerAddController",["$scope","config","$location","rest","save","$document","modalService","user",require("./beerAddController")]).
controller("BeerDetailsController",["$scope","config","$location","rest",require("./beerDetailsController")]).
controller("BeerUpdateController",["$scope","config","$location","rest","save","$document","modalService","$controller","user",require("./beerUpdateController")]);
module.exports=angular.module("BeersApp").name;