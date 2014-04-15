'use strict';

angular.module('codingDojoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'd3Module'
])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
	  .when('/', {
	    templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	  })
      .when('/heroes/:id', {
        templateUrl: 'views/heroes.html',
        controller: 'HeroesCtrl'
      })
      .when('/comics/:id', {
        templateUrl: 'views/comics.html',
        controller: 'ComicsCtrl'
      })
      .when('/series/:id', {
        templateUrl: 'views/series.html',
        controller: 'SeriesCtrl'
      })
      .when('/stories/:id', {
        templateUrl: 'views/stories.html',
        controller: 'StoriesCtrl'
      });

      $httpProvider.interceptors.push('LoaderInterceptor');
  });
