eventsApp.factory('eventData', function($http, $q) {
    return {

        /* returns a promise */
        getEvent: function() {
            var deferred = $q.defer();

            $http({method:'GET', url:'/data/event/1.json'})
                .success( function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error( function (data, status, headers, config) {
                    deferred.reject(status);
                });

            return deferred.promise;
        }
    }
});
