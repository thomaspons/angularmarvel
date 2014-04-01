'use strict';

angular.module('condingDojoApp')
    .factory('ComicsFactory', function($resource, Api){
        return $resource(Api.BASE + '/comics/:id', {id: '@id', 'apikey': Api.KEY});
    });
