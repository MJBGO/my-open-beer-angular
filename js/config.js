module.exports=function($routeProvider,$locationProvider,$httpProvider) {
	//$httpProvider.defaults.useXDomain = true;
	//$httpProvider.defaults.withCredentials = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
	$routeProvider.
	when('/', {
		templateUrl: 'templates/main.html',
		controller: 'MainController'
	}).when('/breweries', {
		templateUrl: 'templates/breweries/main.html',
		controller: 'BreweriesController'
	}).when('/breweries/refresh', {
		templateUrl: 'templates/breweries/main.html',
		controller: 'BreweriesController'
	}).when('/breweries/new', {
		templateUrl: 'templates/breweries/breweryForm.html',
		controller: 'BreweryAddController'
	}).when('/breweries/update', {
		templateUrl: 'templates/breweries/breweryForm.html',
		controller: 'BreweryUpdateController'
    }).when('/breweries/details', {
        templateUrl: 'templates/breweries/details.html',
        controller: 'BreweryDetailsController'
    }).when('/saves', {
		templateUrl: 'templates/saveMain.html',
		controller: 'SaveController'
	}).when('/config', {
		templateUrl: 'templates/config.html',
		controller: 'ConfigController'
	}).when('/beers', {
        templateUrl: 'templates/beers/main.html',
        controller: 'BeersController'
    }).when('/beers/new', {
        templateUrl: 'templates/beers/beerForm.html',
        controller: 'BeerAddController'
    }).when('/beers/update', {
        templateUrl: 'templates/beers/beerForm.html',
        controller: 'BeerUpdateController'
    }).when('/beers/details', {
        templateUrl: 'templates/beers/details.html',
        controller: 'BeerDetailsController'
    }).when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    }).otherwise({
        redirectTo: '/'
	});
	if(window.history && window.history.pushState){
		$locationProvider.html5Mode(true);
	}
};