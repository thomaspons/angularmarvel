'use strict';

angular.module('codingDojoApp')
	.controller('MainCtrl', function ($scope, HeroesFactory, $http, $location) {
		$scope.searchHeroes = function(){
			HeroesFactory.query({limit: '100', orderBy: 'name', nameStartsWith: $scope.search}, function(data){
				$scope.heroes = data.data.results;

                $scope.childrens = {
                    children: []
                };

                for(var i = 0; i < $scope.heroes.length; i++) {
                    $scope.childrens.children.push({"name": $scope.heroes[i].name, "size": $scope.heroes[i].comics.available, image: $scope.heroes[i].thumbnail.path + '.' + $scope.heroes[i].thumbnail.extension});
                }
            });
		};
	
		$scope.goToHeroDetail = function(id){
			$location.path('/heroes/' + id);
		};
  });
