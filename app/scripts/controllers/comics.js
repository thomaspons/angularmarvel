'use strict';

angular.module('condingDojoApp')
    .controller('ComicsCtrl', function ($scope, ComicsFactory, $routeParams) {
        ComicsFactory.get({id: $routeParams.id}, function(data){
            $scope.comics = data.data.results[0];
            console.log($scope.comics);
        });
    });
