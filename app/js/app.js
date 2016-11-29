'use strict';

// Declare app level module which depends on filters, and services
var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource'])
    // This function will be called when this application is being bootstrapped
    // and this module is being configured
    .config(function($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: '/templates/EventDetails.html',
                controller: 'EventController'
            });
        $routeProvider.otherwise({redirectTo: '/events'});
    });
