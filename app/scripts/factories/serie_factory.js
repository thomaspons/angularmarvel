'use strict';

angular.module('codingDojoApp')
    .factory('SeriesFactory', function($resource, Api){
        return $resource(Api.BASE + '/series/:id', {id: '@id', 'apikey': Api.KEY});
    });

