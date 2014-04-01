'use strict';

angular.module('condingDojoApp')
    .controller('SeriesCtrl', function ($scope, SeriesFactory, $routeParams, Api, HeroesFactory, $http, $location) {
        SeriesFactory.get({id: $routeParams.id}, function(data){
            $scope.series = data.data.results[0];
        });
		
		$scope.getHeroDetail = function(hero){
			$http({method: 'GET', url: hero.resourceURI, params: {apikey: Api.KEY}}).
            success(function(data, status, headers, config){
                $location.path('heroes/' + data.data.results[0].id);
            });
		};
    });
