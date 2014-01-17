angular.module('app').factory('productRepository', function ($http, $q) {
    return {
        getAll: function () {
            var deferred = $q.defer();
            $http.get('/Product/GetAll').success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        }
    }
});