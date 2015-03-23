module.exports=function() {
	var factory={breweries:{},beers:{},server:{}};
	factory.activeBrewery=undefined;
	factory.breweries.loaded=false;
	factory.breweries.refresh="all";//all|ask
	factory.breweries.update="immediate";//deffered|immediate

    factory.activeBeer=undefined;
    factory.beers.loaded=false;
    factory.beers.refresh="all";//all|ask
    factory.beers.update="immediate";//deffered|immediate


	factory.server.privateToken="";
	factory.server.restServerUrl="http://openbeer.jbgomond.com/";
	factory.server.force=false;
	return factory;
};