'use strict';

angular.module('d3Module').
    directive('bubbleChart', function () {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                data: '=chartData',
                modal: '@'
            },
            link: function (scope, element, attrs, $window) {

                var drawGraph = function () {

                    //Clear du grpahe en cours
                    d3.select("svg").remove();

                    //Créationd u SVG
                    var svg = d3.select(element[0])
                        .append('svg');

                    //Création du layout
                    var pack = d3.layout.pack()
                        .sort(null)
                        .size([$('svg').width(), $('svg').height()])
                        .value(function (d) {
                            return d.size;
                        });

                    //Données calculées par le layout
                    var packCalculations = pack.nodes(scope.data);

                    //Données flattened (sans le root)
                    var bubbleChart = svg.selectAll()
                        .data(packCalculations.filter(function (d) {
                            return !d.children;
                        }))
                        .enter();

                    //Ajout des groupes d'éléments
                    var g = bubbleChart.append('g');

                    //Ajout des images pattern
                    g.append('svg:defs')
                        .append('svg:pattern')
                        .attr('id', function (d) {
                            return d.name
                        })
                        .attr('patternUnits', 'objectBoundingBox')
                        .attr('width', 1)
                        .attr('height', 1)
                        .append('image')
                        .attr("preserveAspectRatio", "none")
                        .attr('xlink:href', function (d) {
                            return d.image;
                        })
                        .attr('width', function (d) {
                            return d.r * 2;
                        })
                        .attr('height', function (d) {
                            return d.r * 2;
                        });

                    //Ajout des cercles
                    g.append('circle')
                        .attr("r", function (d) {
                            return d.r
                        })
                        .attr("transform", function (d) {
                            return "translate(" + d.x + "," + d.y + ") scale(0)";
                        });

                    //Animation des cercles
                    g.selectAll('circle')
                        .transition()
                        .duration(2500)
                        .ease('elastic')
                        .attr("transform", function (d) {
                            return "translate(" + d.x + "," + d.y + ") scale(1)";
                        })
                        .style('fill', function (d) {
                            return 'url("#' + d.name + '")';
                        })

                    //Ajout des tooltips
                    g.selectAll('circle')
                        .append("svg:title")
                        .text(function (d) {
                            return d.name + ' - ' + d.size;
                        });

                };

                $(scope.modal).on('shown.bs.modal', function () {
                    drawGraph();
                });
            }
        }
    });