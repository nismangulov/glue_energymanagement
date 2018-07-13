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

import Axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, Axios);

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
      url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
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
      data: []
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
