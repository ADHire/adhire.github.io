var app = angular.module('portMod', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'portCtrl',
        templateUrl: 'partials/landing.html'
      })
    .when('/basics',
      {
        controller: 'portCtrl',
        templateUrl: 'partials/basics.html'
      })
    .when('/projects',
      {
        controller: 'portCtrl',
        templateUrl: 'partials/projects.html'
      })
    .when('/skills',
      {
        controller: 'portCtrl',
        templateUrl: 'partials/skills.html'
      })
    .otherwise({ redirectTo: '/' });
});
