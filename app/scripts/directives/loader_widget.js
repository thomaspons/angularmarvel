'use strict';

angular.module('codingDojoApp')
    .directive('loaderWidget', function () {
        return {
            restrict: "A",
            scope: {

            },
            link: function (scope, element) {
                element.hide();

                scope.$on('START_REQUEST', function () {
                    element.show();
                });

                scope.$on('END_REQUEST', function () {
                    element.hide();
                });
            }
        };
});
