'use strict';

/**
 * @ngdoc function
 * @name angularjsOpenlayersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsOpenlayersApp
 */
angular.module('angularjsOpenlayersApp')
  .controller('MainCtrl', function ($scope) {

    var map = new OpenLayers.Map('map');

    var layer = new OpenLayers.Layer.OSM('Descriptive Layer Name');

    map.addLayer(layer);

    map.setCenter(
      new OpenLayers.LonLat(-71.147, 42.472).transform(
        new OpenLayers.Projection('EPSG:4326'),
        map.getProjectionObject()
      ),
      12
    );    
  });
