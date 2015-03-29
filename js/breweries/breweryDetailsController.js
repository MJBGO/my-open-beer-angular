module.exports=function($scope,$location,config,rest) {
    $scope.data = {};
    $scope.brewery = config.activeBrewery;

    if (angular.isUndefined(config.activeBrewery)) {
        $location.path("breweries/");
    }
    else{
        if($scope.brewery.photo == null || $scope.brewery.photo == ""){
            $scope.brewery.photo = "breweries.jpg";
        }
    }

    var beers = "beers/brewery/" + $scope.brewery.id;
    rest.getAll($scope.data, beers);

    $scope.countBeers = function(){
        if($scope.data[beers] == undefined)
            return 0;
        else{
            return $scope.data[beers].length;
        }
    };
};