'use strict';

angular.module('condingDojoApp')
    .factory('SerieFactory', function($resource, ApiKey){
        return $resource('http://gateway.marvel.com/v1/public/series/:id', {id: '@id', 'apikey': ApiKey.KEY});
    });

