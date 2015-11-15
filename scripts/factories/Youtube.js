angular.module("jeviteca").factory("Youtube", function(){
    function getYoutubeLink(parent, son){
        var query = encodeURIComponent((parent + " " + son).toLowerCase());
        return "http://www.youtube.com/results?search_query=" + query;
    }

    return getYoutubeLink;
});