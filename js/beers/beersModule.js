var appBeers=angular.module("BeersApp", []).
controller("BeersController", ["$scope","rest","$timeout","$location","config","$route","save",require("./BeersController")]).
controller("BeersAddController",["$scope","config","$location","rest","save","$document","modalService",require("./BeersAddController")]).
controller("BeersUpdateController",["$scope","config","$location","rest","save","$document","modalService","$controller",require("./BeersUpdateController")]);
module.exports=angular.module("BeersApp").name;