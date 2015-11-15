angular.module("jeviteca").service("LocalStorage", function() {

    var works = true;

    // Load the LocalStorage and check if the navigator has local storage.

    this.initLocalStorage = function() {
        works = typeof(Storage) !== "undefined";
    };


    this.setInLocalStorage = function(identifier, information) {
        if (works) {
            localStorage.setItem(identifier, information);
            return true;
        } else {
            return false;
        }
    };

    this.getInLocalStorage = function(identifier) {
        if (works) {
            return localStorage.getItem(identifier);
        } else {
            return null;
        }
    }


});