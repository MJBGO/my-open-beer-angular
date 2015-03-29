module.exports=function($scope,config,$location,rest) {
    $scope.data = {};
    $scope.beer = config.activeBeer;

    if (angular.isUndefined(config.activeBeer)) {
        $location.path("beers/");
    } else {
        if ($scope.beer.photo == null || $scope.beer.photo == "") {
            $scope.beer.photo = "beer.png";
        }
    }

    var breweryUrl = "breweries/" + config.activeBeer.idBrewery;
    rest.getAll($scope.data, breweryUrl);

    $scope.getBreweryName = function() {
        return $scope.data[breweryUrl].name;
    };

    $scope.showBrewery = function() {
        if(angular.isDefined($scope.data[breweryUrl])) {
            config.activeBrewery = angular.copy($scope.data[breweryUrl]);
            $location.path("breweries/details");
        }

    }
};