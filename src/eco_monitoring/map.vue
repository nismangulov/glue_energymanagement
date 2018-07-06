<template>
   <v-container grid-list-md fill-height fluid>
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
  mounted() {
    console.log(table_data[0].coordinates.lng);
  },
  data: () => ({
    map: {
      zoom: 10,
      center: L.latLng(55.697855, 37.634648),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a  href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markers: table_data
    },
    heatmapOptions: {
      scaleRadius: true,
      useLocalExtrema: true,
      latField: "lat",
      lngField: "lng",
      valueField: "count",
      radius: 0.2,
      maxOpacity: 0.3,
      minOpacity: 0,
      blur: 1
    },
    heatmapData: {
      min: 1,
      max: 100,
      data: [
        {
          lat: 55.752024,
          lng: 37.621766,
          count: 10
        },
        {
          lat: 55.789306,
          lng: 37.669198,
          count: 10
        },
        {
          lat: 55.718442,
          lng: 37.554528,
          count: 10
        },
        {
          lat: 55.71224,
          lng: 37.692544,
          count: 10
        },
        {
          lat: 55.826429,
          lng: 37.339608,
          count: 10
        },
        {
          lat: 55.929118,
          lng: 37.518197,
          count: 10
        },
        {
          lat: 55.905982,
          lng: 37.733118,
          count: 10
        },
        {
          lat: 55.679981,

          lng: 37.244258,
          count: 10
        },
        {
          lat: 55.788074,
          lng: 37.929531,
          count: 10
        },
        {
          lat: 55.44767,
          lng: 37.754647,
          count: 10
        },
        {
          lat: 55.425808,
          lng: 37.578865,
          count: 10
        },
        {
          lat: 55.556797,
          lng: 37.433297,
          count: 5
        },
        {
          lat: 55.603896,
          lng: 37.934026,
          count: 5
        },
        {
          lat: 55.659057,
          lng: 38.167485,
          count: 5
        }
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
