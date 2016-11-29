AngularJS Fundamentals Example 2
Routing

Based on [Pluralsight] AngularJS Fundamentals
by Joe Eames and Jim Cooper

Works:
http://localhost:8010/#/event/1
http://localhost:8010/#/event/2, etc


Doesn't work:
http://localhost:8010/#/events
I think the call to resource.query() in EventData.js
isn't iterating over all the JSON files to load them as expected.

