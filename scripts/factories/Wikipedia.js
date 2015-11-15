angular.module("jeviteca").factory("Wikipedia", function(){
    function getWikipediaLink(value){
        var query = encodeURIComponent(value.toLowerCase());
        return "https://es.wikipedia.org/wiki/Special:Search?search=" + query;
    }

    return getWikipediaLink;
});