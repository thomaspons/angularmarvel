'use strict';

angular.module('condingDojoApp')
	.controller('MainCtrl', function ($scope, HeroesFactory, $http, Api, $location) {
		$scope.searchHeroes = function(){
			HeroesFactory.query({limit: '100', orderBy: 'name', nameStartsWith: $scope.search}, function(data){
				$scope.heroes = data.data.results;
			});
		};
	
		$scope.goToHeroDetail = function(id){
			$location.path('/heroes/' + id);
		};
	 
  });
