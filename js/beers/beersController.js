module.exports=function($scope,rest,$timeout,$location,config,$route,save,user) {
    $scope.data={load:false};

    $scope.sortBy={field:"name",asc:false};

    $scope.messages=rest.messages;

    if(config.beers.refresh==="all" || !config.beers.loaded){
        $scope.data.load=true;
        rest.getAll($scope.data,"beers");
        config.beers.loaded=true;
    }else{
        $scope.data["beers"]=config.beers.all;
    }
    $scope.allSelected=false;

    $scope.selectAll=function(){
        angular.forEach($scope.data.beers, function(value, key) {
            value.selected=$scope.allSelected;
        });
    };

    $scope.refresh=function(){
        save.executeAll();
    };

    $scope.showAdd=function() {
        return user.isLogged();
    };

    $scope.showUpdate=function(){
        return angular.isDefined($scope.activeBeer) && user.isLogged();
    };

    $scope.showDetails=function() {
        return angular.isDefined($scope.activeBeer);
    };

    $scope.refreshOnAsk=function(){
        return config.beers.refresh == 'ask';
    };

    $scope.defferedUpdate=function(){
        return config.beers.mode == 'unlog';
    };

    $scope.setActive=function(Beer){
        if(Beer!==$scope.activeBeer)
            $scope.activeBeer=Beer;
        else
            $scope.activeBeer=undefined;
    };

    $scope.isActive=function(Beer){
        return Beer==$scope.activeBeer;
    };

    $scope.hasMessage=function(){
        return rest.messages.length>0;
    };

    $scope.readMessage=function(message){
        $timeout(function(){
            message.deleted=true;
        },5000);
        return true;
    };

    $scope.countSelected=function(){
        var result=0;
        angular.forEach($scope.data.beers, function(value, key) {
            if(value.selected && !value.deleted)
                result++;
        });
        return result;
    };

    $scope.hideDeleted=function(){
        $scope.mustHideDeleted=!$scope.mustHideDeleted;
        angular.forEach($scope.data.beers, function(value, key) {
            if($scope.mustHideDeleted){
                if(value.flag==='Deleted')
                    value.deleted=true;
            }else{
                value.deleted=false;
            }
        });
    };

    $scope.edit=function(Beer){
        if(angular.isDefined(Beer))
            $scope.activeBeer=Beer;
        config.activeBeer=angular.copy($scope.activeBeer);
        config.activeBeer.reference=$scope.activeBeer;
        $location.path("beers/update");
    };

    $scope.details=function(Beer){
        if(angular.isDefined(Beer))
            $scope.activeBeer=Beer;
        config.activeBeer=angular.copy($scope.activeBeer);
        config.activeBeer.reference=$scope.activeBeer;
        $location.path("beers/details");
    };

    $scope.update=function(Beer,force,callback){
        if(angular.isUndefined(Beer)){
            Beer=$scope.activeBeer;
        }
        $scope.data.posted={ "Beer" : {
            "name" : Beer.name,
            "url"  : Beer.url
        }
        };
        $scope.data.beers.push(Beer);
        Beer.created_at=new Date();
        if(config.beers.mode==="log" || force){
            rest.post($scope.data,"beers",Beer.name,callback);
        }else{
            save.addOperation("New",$scope.update,Beer);
            $location.path("beers");
        }
    };

    $scope.remove=function(){
        angular.forEach($scope.data.beers, function(value, key) {
            if(value.selected){
                $scope.removeOne(value);
            }
        });
        return true;
    };
    $scope.removeOne=function(Beer,force,callback){
        if(config.beers.mode==="log" || force){
            Beer.deleted=true;
            rest.remove(Beer,"beers",callback);
        }else{
            save.addOperation("Deleted",$scope.removeOne,Beer);
            Beer.deleted=$scope.hideDeleted;
        }
    };
};