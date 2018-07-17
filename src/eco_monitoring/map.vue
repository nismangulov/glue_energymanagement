<template>
   <v-container grid-list-md fill-height fluid>
      <v-layout column fix-layout>
         <v-flex d-flex md12>
            <v-card>
               <l-map :zoom="map.zoom" :center="map.center">
                  <l-tile-layer :url="map.url" :attribution="map.attribution"></l-tile-layer>
                  <colored-heatmap :data="heatmapData" :options="heatmapOptions"></colored-heatmap>
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

import Axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, Axios);

import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import ColoredHeatmap from "../common/colored-heatmap";

import table_data from "!json-loader!./stations.json";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    ColoredHeatmap
  },
  mounted() {
    //this.update();
  },
  timers: {
    update: {
      autostart: true,
      time: 0
    }
  },

  methods: {
    update() {
      Vue.axios
        .get("/we/weather_api")
        .then(response => {
          console.log(response.data[14]);
          this.heatmapData.data = response.data;
          this.$timer.stop("update");
          this.timers.update.time = 5000;
          this.$timer.start("update");
        })
        .catch(error => {
          console.log(error);
          this.$timer.stop("update");
          this.timers.update.time = 5000;
          this.$timer.start("update");
        });
    }
  },
  data: () => ({
    map: {
      zoom: 10,
      center: L.latLng(55.697855, 37.634648),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
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
      max: 20,
      data: [
        {lat: 55.83423792, lng: 37.64075481, count: 18},
        {lat: 55.7552443, lng: 37.61348755, count: 28},
        {lat: 55.68098578, lng: 37.70412475, count: 62},
        {lat: 55.86790868, lng: 37.51461059, count: 32},
        {lat: 55.77455929, lng: 37.48027832, count: 54},
        {lat: 55.69259798, lng: 37.54756958, count: 48},
        {lat: 55.61511815, lng: 37.61211426, count: 78},
        {lat: 55.83398936, lng: 37.73296387, count: 43}
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
