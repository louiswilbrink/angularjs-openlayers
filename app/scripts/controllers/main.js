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

    // Add the OSM layer to the map.
    map.addLayer(layer);

    // Set a location with interesting streets and landmarks.
    // Note: LonLat() requires specifying a map projection type, like geodetic or geocentric.
    map.setCenter(
      new OpenLayers.LonLat(-71.147, 42.472).transform(
        new OpenLayers.Projection("EPSG:4326"), // Geodetic system.
        map.getProjectionObject()
      )
    );

    // Set zoom level.
    map.zoomTo(12);
  });
