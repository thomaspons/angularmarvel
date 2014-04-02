'use strict';

angular.module('codingDojoApp')
    .controller('ComicsCtrl', function ($scope, ComicsFactory, $routeParams, Api, HeroesFactory, $http, $location) {
        ComicsFactory.get({id: $routeParams.id}, function(data){
            $scope.comics = data.data.results[0];
        });
		
		$scope.getHeroDetail = function(hero){
			$http({method: 'GET', url: hero.resourceURI, params: {apikey: Api.KEY}}).
            success(function(data, status, headers, config){
                $location.path('heroes/' + data.data.results[0].id);
            });
		};
    });
