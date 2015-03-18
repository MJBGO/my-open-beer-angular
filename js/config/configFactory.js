module.exports=function() {
	var factory={breweries:{},server:{}};
	factory.activeBrewery=undefined;
	factory.breweries.loaded=false;
	factory.breweries.refresh="all";//all|ask
	factory.breweries.update="immediate";//deffered|immediate
	factory.server.privateToken="";
	factory.server.restServerUrl="http://openbeer.jbgomond.com/";
	factory.server.force=false;
	return factory;
};