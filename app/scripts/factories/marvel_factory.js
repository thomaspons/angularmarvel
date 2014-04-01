'use strict';

angular.module('condingDojoApp')
    .factory('MarvelFactory', function($resource, ApiKey){
        return $resource('http://gateway.marvel.com/v1/public/characters/:id', {id: '@id', 'apikey': ApiKey.KEY});
    });
