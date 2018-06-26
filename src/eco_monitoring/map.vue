<template>
   <v-container grid-list-md fill-height>
      <v-layout column fix-layout>
         <v-flex d-flex md12>
            <v-card>
               <l-map :zoom="map.zoom" :center="map.center">
                  <l-tile-layer :url="map.url" :attribution="map.attribution"></l-tile-layer>
                  <heatmap :data="heatmapData" :options="heatmapOptions"></heatmap>
                  <template v-for="marker in map.markers">
                     <l-marker :lat-lng="marker.coordinates" @click="$router.push({path: '/eco_monitoring/history'})" v-bind:key="marker.name"></l-marker>
                  </template>
               </l-map>
            </v-card>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
import Vue from "vue";

import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import Heatmap from "../common/heatmap";

import table_data from "!json-loader!./stations.json";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    Heatmap
  },
  data: () => ({
    map: {
      zoom: 10,
      center: L.latLng(55.755826, 37.6172999),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a  href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markers: table_data
    },
    heatmapOptions: {
      scaleRadius: true, 
      useLocalExtrema: true,
      latField: 'lat',
      lngField: 'lng',
      valueField: 'count',
      radius: 0.1,
      maxOpacity: 0.7,
      minOpacity: 0,
      blur: .75,
    },
    heatmapData: {
      min: 0,
      max: 100,
      data: [
         {lat: 55.83423792, lng: 37.64075481, count: 18},
         {lat: 55.7552443, lng: 37.61348755, count: 28},
         {lat: 55.68098578, lng: 37.70412475, count: 62},
         {lat: 55.86790868, lng: 37.51461059, count: 32},
         {lat: 55.77455929, lng: 37.48027832, count: 54},
         {lat: 55.69259798, lng: 37.54756958, count: 48},
         {lat: 55.61511815, lng: 37.61211426, count: 78},
         {lat: 55.83398936, lng: 37.73296387, count: 43},
      ]
    }
  })
};
</script>

<style>
@import "../../node_modules/leaflet/dist/leaflet.css";

.container.fill-height .layout.fix-layout {
  height: calc(100% + 8px);
}

.container.fill-height .layout.fix-layout-large {
  height: calc(100% + 16px);
}

.move-top {
  margin-top: -8px;
}
</style>
