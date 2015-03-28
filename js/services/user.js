module.exports=function($http, $location, restConfig) {
    var headers={ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Accept': 'application/json'
    };

    this.connect = function(mail, password) {
        var formData = {"mail": mail, "password": password};
        var request = $http({
            method: "POST",
            url: restConfig.server.restServerUrl+"user/connect",
            data: $.param(formData),
            headers: headers
        });
        request.success(function(data) {
            if (data.connected) {
                restConfig.server.privateToken = data.token;
            } else {
                alert('Les identifiants sont faux !');
            }
        }).error(function(data, status){
            self.addMessage({type: "warning", content:"Erreur de connexion au serveur, statut de la réponse : "+status+"<br>"+data.message});
        });
    };

    this.disconnect = function() {
        $location.path("/");
        var request = $http({
            method: "GET",
            url: restConfig.server.restServerUrl+"user/disconnect",
            headers: headers
        });
        request.success(function(data) {
            if (!data.connected) {
                alert('Une erreur est survenue');
            } else {
                restConfig.server.privateToken = "";
                alert("Vous avez été déconnecté. Merci de votre visite et à bientôt !");
            }
        }).error(function(data, status){
            self.addMessage({type: "warning", content:"Erreur de connexion au serveur, statut de la réponse : "+status+"<br>"+data.message});
        });
    };

    this.checkConnexion = function() {
        var request = $http({
            method: "GET",
            url: restConfig.server.restServerUrl+"user/check",
            headers: headers
        });
        request.success(function(data) {
            restConfig.server.privateToken = data.connected ? data.token : "";
        }).error(function(data, status) {
            self.addMessage({type: "warning", content:"Erreur de connexion au serveur, statut de la réponse : "+status+"<br>"+data.message});
        });
    };

    this.isLogged = function() {
        return restConfig.server.privateToken != "";
    };

    this.redirectIfNotLogged = function() {
        if (!this.isLogged()) {
            $location.path("401");
        }
    }
};