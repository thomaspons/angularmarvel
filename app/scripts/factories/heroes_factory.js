'use strict';

angular.module('codingDojoApp')
    .factory('HeroesFactory', function($resource, Api){
        return $resource(Api.BASE + '/characters/:id', {id: '@id', 'apikey': Api.KEY}, {query: {method: 'GET', isArray: false}});
    });
