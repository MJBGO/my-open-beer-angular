module.exports=function($scope,$http,$location,save,$window, modalConnexion, restConfig, user) {

	$scope.hasOperations=function(){
		return save.operations.length>0;
	};
	
	$scope.opCount=function(){
		return save.operations.length;
	};
	$scope.buttons=[{caption:"Okay"},{caption:"Annuler",dismiss:"true"}];

    $scope.isLogged = function() {
        return user.isLogged();
    };

    $scope.disconnect = function() {
        user.disconnect();
    };

    $scope.connectModal = function() {
        modalConnexion.showModal('Se connecter', '<input type="email" class="form-control" id="email" data-ng-model="email" placeholder="Entrez votre email"><br><input type="password" class="form-control" id="password" data-ng-model="password" placeholder="Mot de passe">', function(value) {
            $scope.exit=true;
            if(value == "Connexion") {
                var mail = $('#email').val();
                var password = $('#password').val();
                user.connect(mail, password);
            }
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

    user.checkConnexion();
};