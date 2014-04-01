'use strict';

angular.module('condingDojoApp')
    .factory('MarvelFactory', function($resource){
        return $resource('http://gateway.marvel.com/v1/public/characters/:id', {id: '@id', 'apikey': '2b550ece830a7822d22aad53b2383e2e'});
    });
