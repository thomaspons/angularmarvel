'use strict';

angular.module('condingDojoApp')
    .factory('SeriesFactory', function($resource, Api){
        return $resource(Api.BASE + '/series/:id', {id: '@id', 'apikey': Api.KEY});
    });

