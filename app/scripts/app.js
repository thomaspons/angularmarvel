'use strict';

angular.module('condingDojoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/heroes/:name', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/comics/:id', {
        templateUrl: 'views/comics.html',
        controller: 'ComicsCtrl'
      });
  });
