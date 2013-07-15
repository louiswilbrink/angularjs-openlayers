'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() 
  {
    var map = new OpenLayers.Map("map");
    var osm = new OpenLayers.Layer.OSM();

    map.addLayer(osm);

    map.zoomToMaxExtent();
  }])
  .controller('MyCtrl2', [function() 
  {

  }]);
