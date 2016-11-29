eventsApp.factory('eventData', function($q, $resource) {

    var eventResource = $resource("/data/event/:id", {id: '@id'});

    return {

        getEvent: function(eventId) {
            var deferred = $q.defer();
            eventResource
                .get(
                    {id: eventId},
                    function (event) {
                        deferred.resolve(event);
                    },
                    function (response) {
                        deferred.reject(response);
                    });

            return deferred.promise;
        },

        save: function(event) {
            var deferred = $q.defer();
            event.id = 999;
            eventResource.save(event,
                function(response) { deferred.resolve(response); },
                function(response) { deferred.reject(response); }
            );
            return deferred.promise;
        },

        getAllEvents: function() {
            return eventResource.query()
        }
    }
});
