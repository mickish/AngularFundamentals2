'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $routeParams) {

        $scope.sortorder = 'name';

        $scope.event = eventData.getEvent($routeParams.eventId);
        $scope.event.then(
            function(event) {console.log(event); },
            function(response) {console.log(response); }
        );

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);
