module.exports=function($scope,$http,$location,save,$window, modalConnexion, restConfig) {

	$scope.hasOperations=function(){
		return save.operations.length>0;
	};
	
	$scope.opCount=function(){
		return save.operations.length;
	};
	$scope.buttons=[{caption:"Okay"},{caption:"Annuler",dismiss:"true"}];

    $scope.connexionModal = function() {
        modalConnexion.showModal('Se connecter', '<input type="email" class="form-control" id="email" data-ng-model="email" placeholder="Entrez votre email"><br><input type="password" class="form-control" id="password" data-ng-model="password" placeholder="Mot de passe">', function(value) {
            $scope.exit=true;
            if(value=="Connexion") {
                var mail = $('#email').val();
                var password = $('#password').val();
                $scope.connexion(mail, password);
            }
        });
    };

    $scope.connexion = function(mail, password) {
        var data = {};
        data.posted = {"mail": mail, "password": password};
        $scope.postConnect(data, function(d){
            console.log("Connexion réussie, token : "+d.token)}
        );
    };

    $scope.postConnect=function(response, callBack){
        console.log(response);

        var headers={ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Accept': 'application/json'
        };
        var request = $http({
            method: "POST",
            url: restConfig.server.restServerUrl+"user/connect",
            data: $.param(response.posted),
            headers: headers
        });
        request.success(function(data, status, headers, config) {
            if (data.connected) {
                alert('Les identifiants sont bons !');
                restConfig.server.privateToken = data.token;
            } else {
                alert('Les identifiants sont faux !');
            }
        }).error(function(data, status, headers, config){
            self.addMessage({type: "warning", content:"Erreur de connexion au serveur, statut de la réponse : "+status+"<br>"+data.message});
        });
    };

    $scope.checkConnexion = function() {
        var headers={ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Accept': 'application/json'
        };
        var request = $http({
            method: "GET",
            url: restConfig.server.restServerUrl+"user/check",
            headers: headers
        });
        request.success(function(data, status, headers, config) {
            restConfig.server.privateToken = data.connected ? data.token : "";
        }).error(function(data, status, headers, config) {
            self.addMessage({type: "warning", content:"Erreur de connexion au serveur, statut de la réponse : "+status+"<br>"+data.message});
        });
    };
	
	var beforeUnload=function(e) {
		if($scope.hasOperations())
			return "Attention, vous allez perdre les modifications("+$scope.opCount()+") non enregistrées si vous continuez...";
	};
	angular.element($window).on('beforeunload',beforeUnload);
	
	$scope.$on("$destroy", function () {
		$window.removeEventListener('beforeunload', beforeUnload);
	});

    $scope.checkConnexion();
	
};