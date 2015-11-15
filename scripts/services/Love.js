angular.module("jeviteca").service("Love", function (LocalStorage) {

    this.removeLove = function (localStorageId, id) {
        var values = LocalStorage.getInLocalStorage(localStorageId);
        var jsonObject = {};
        if (values) {
            jsonObject = JSON.parse(values);
            // TODO: Revisar
            var indexElement = jsonObject.values.indexOf(id);
            if (indexElement > -1) {
                jsonObject.values.splice(indexElement, 1);
            }
        } else {
            jsonObject.values = [];
        }
        LocalStorage.setInLocalStorage(localStorageId, JSON.stringify(jsonObject));
    };


    this.setLove = function (localStorageId, id) {
        var values = LocalStorage.getInLocalStorage(localStorageId);
        var jsonObject = {};
        if (values) {
            jsonObject = JSON.parse(values);
            jsonObject.values.push(id);
        } else {
            jsonObject.values = [id];
        }
        LocalStorage.setInLocalStorage(localStorageId, JSON.stringify(jsonObject));
    };

    this.getLove = function (localStorageId, id) {
        var values = LocalStorage.getInLocalStorage(localStorageId);
        if (values) {
            var jsonObject = JSON.parse(values);
            if (jsonObject.values) {
                if (jsonObject.values.indexOf(id) !== -1) {
                    return true;
                }
                else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    };
});