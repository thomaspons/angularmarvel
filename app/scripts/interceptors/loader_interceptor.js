'use strict';

angular.module('codingDojoApp').
    factory('LoaderInterceptor', function($injector, $q){

        var $http, rootScope;

        return {

            'request': function(config){
                rootScope = rootScope || $injector.get('$rootScope');
                rootScope.$broadcast('START_REQUEST');

                return config || $q.when(config);
            },

            'response': function(response){
                $http = $http || $injector.get('$http');
                if($http.pendingRequests.length < 1){
                    rootScope = rootScope || $injector.get('$rootScope');
                    rootScope.$broadcast('END_REQUEST');
                }

                return response;
            },

            'responseError': function(rejection){
                $http = $http || $injector.get('$http');
                if($http.pendingRequests.length < 1){
                    rootScope = rootScope || $injector.get('$rootScope');
                    rootScope.$broadcast('END_REQUEST');
                }

                return rejection;
            }
        };
    });
