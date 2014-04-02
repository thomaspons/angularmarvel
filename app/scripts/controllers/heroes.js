'use strict';

angular.module('codingDojoApp')
  .controller('HeroesCtrl', function ($scope, HeroesFactory, $routeParams, $http, Api) {
        HeroesFactory.get({id: $routeParams.id}, function(data){
         $scope.character = data.data.results[0];
     });

     $scope.getItem = function(uri){
        $http({method: 'GET', url: uri, params: {apikey: Api.KEY}}).
            success(function(data, status, headers, config){
                $scope.modalItem = data.data.results[0];
            });
     };

     $scope.selection = 'series';
  });
