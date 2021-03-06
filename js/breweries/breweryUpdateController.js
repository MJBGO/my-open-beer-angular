module.exports=function($scope,config,$location,rest,save,$document,modalService,$controller,user){
    user.redirectIfNotLogged();
	$controller('BreweryAddController', {$scope: $scope});

	if(angular.isUndefined(config.activeBrewery)){
		$location.path("breweries/");
	}
	$scope.activeBrewery=config.activeBrewery;
	
	$scope._update=function(brewery,force,callback){
		var result=false;
		if(force || $scope.frmBrewery.$dirty){
			if(angular.isUndefined(brewery)){
				brewery=$scope.activeBrewery;
			}else{
				config.activeBrewery=angular.copy(brewery);
				config.activeBrewery.reference=brewery;
			}
			$scope.data.posted={
			    "name" : brewery.name,
			    "url"  : brewery.url
			};
			
			config.activeBrewery.reference.name=$scope.activeBrewery.name;
			config.activeBrewery.reference.url=$scope.activeBrewery.url;
			config.activeBrewery.reference.updated_at=new Date();
			
			if(config.breweries.mode==="log" || force)
				rest.put(config.activeBrewery.id,$scope.data,"breweries",config.activeBrewery.name,callback);
			else{
				config.activeBrewery.reference.flag="Updated";
                console.log("Updated",$scope.mode,config.activeBrewery.reference);
				save.addOperation("Updated",$scope.mode,config.activeBrewery.reference);
				result=true;
			}
		}else{
			result=true;
		}
		return result;
	}
};