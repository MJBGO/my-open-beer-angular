module.exports=function($scope,config,$location) {

    $scope.beer = config.activeBeer;

    if (angular.isUndefined(config.activeBeer)) {
        $location.path("beers/");
    }
    else{
        if($scope.beer.photo == null || $scope.beer.photo == ""){
            $scope.brewery.photo = "beer.jpg";
        }
    }
};