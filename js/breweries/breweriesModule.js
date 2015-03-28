var appBreweries=angular.module("BreweriesApp", []).
controller("BreweriesController", ["$scope","rest","$timeout","$location","config","$route","save","user", require("./breweriesController")]).
controller("BreweryAddController",["$scope","config","$location","rest","save","$document","modalService","user",require("./breweryAddController")]).
controller("BreweryDetailsController",["$scope","config","$location",require("./breweryDetailsController")]).
controller("BreweryUpdateController",["$scope","config","$location","rest","save","$document","modalService","$controller","user",require("./breweryUpdateController")]);
module.exports=angular.module("BreweriesApp").name;