'use strict';

angular.module('condingDojoApp')
    .factory('ComicsFactory', function($resource){
        return $resource('http://gateway.marvel.com/v1/public/comics/:id', {id: '@id', 'apikey': '2b550ece830a7822d22aad53b2383e2e'});
    });
