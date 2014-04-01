'use strict';

angular.module('condingDojoApp')
    .factory('ComicsFactory', function($resource, ApiKey){
        return $resource('http://gateway.marvel.com/v1/public/comics/:id', {id: '@id', 'apikey': ApiKey.KEY});
    });
