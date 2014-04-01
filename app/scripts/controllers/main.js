'use strict';

angular.module('condingDojoApp')
  .controller('MainCtrl', function ($scope, MarvelFactory, $routeParams, $http) {
     MarvelFactory.get({name: $routeParams.name}, function(data){
         $scope.character = data.data.results[0];
     });

     $scope.getItem = function(uri){
         console.log(uri);
        $http({method: 'GET', url: uri, params: {apikey: '2b550ece830a7822d22aad53b2383e2e'}}).
            success(function(data, status, headers, config){
                $scope.modalItem = data.data.results[0];
            });
     };

     $scope.selection = 'series';
  });
