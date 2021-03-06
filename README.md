![open-beer logo](http://open-beer.kobject.net/img/logo.png "open-beer logo")
#my-open-beer-angular
AngularJs project with API Rest access

# Installation

Veuillez modifier la base du projet dans le fichier index.php

```html
    <head>
        <base href="/">
```

Attention : Veuillez recompiler le fichier bundle.js à l'aide de browserify. Les dossiers comportant nodejs ont été retiré.

# Répartition des tâches

## Alexandre
- ![done](https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/11-24.png) 1- Gestion des bières
- ![done](https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/11-24.png) 5- Déconnexion
- ![done](https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/11-24.png) 6- Paramètres de configuration

## Jean-Baptiste
- ![done](https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/11-24.png) 2- Affichage d’une bière
- ![done](https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/11-24.png) 3- Affichage d’une brasserie/brasseur
- ![done](https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/11-24.png) 4- Connexion à l’application

### Fonction non implémentée par manque de temps
- ![todo](https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/17-24.png) 7- Affichage des bières par brasserie

### Fonction bonus
- ![done](https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/11-24.png) 8.1 - Cookie de connexion

Nous avons implémenté cette fonction en créant un service user. La méthode check de ce service est appelée au chargement de la page et permet de vérifier si la session existe toujours.

Nous avons essayé de garder un code le plus logique possible.

# Serveur REST

Il est hébergé par nos soins à l'adresse http://openbeer.jbgomond.com

# Captures

Listes des brasseurs en mode non connecté (1 bouton)

![breweriesnotlogged](http://img11.hostingpics.net/pics/600539Capture1.png)

Affichage d'un brasseur

![detailsbrewery](http://img11.hostingpics.net/pics/725103Capture2.png)

Listes des bières en mode non connecté (1 bouton)

![beersnotlogged](http://img11.hostingpics.net/pics/569854Capture3.png)

Affichage d'une bière

![detailsbeer](http://img11.hostingpics.net/pics/924535Capture4.png)

Modale de connexion

![modalconnect](http://img11.hostingpics.net/pics/133589Capture5.png)

Affichage des boutons d'éditions si connecté

![buttonslogged](http://img11.hostingpics.net/pics/239096Capture6.png)

Formulaire de modification d'une bière

![formmodifybeer](http://img11.hostingpics.net/pics/295436Capture7.png)

Affichage d'une page 401 si accès à une page d'édition en étant non connecté

![401page](http://img11.hostingpics.net/pics/223855Capture.png)
