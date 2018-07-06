<template>
   <v-container grid-list-md fill-height fluid>

      <v-layout column fix-layout>
         <v-flex d-flex md7>
            <v-layout fix-layout row wrap>
               <v-flex d-flex md6>
                  <v-layout fix-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card>
                           <l-map :zoom="map.zoom" :center="map.center">
                              <l-tile-layer :url="map.url" :attribution="map.attribution"></l-tile-layer>
                              <l-marker :lat-lng="map.marker"></l-marker>
                           </l-map>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md6>
                  <v-layout fix-layout row wrap>
                     <v-flex d-flex md12>
                        <v-layout fix-layout column="">
                           <v-flex d-flex md6>
                              <v-card color="blue" dark>

                              </v-card>
                           </v-flex>
                           <v-flex d-flex md6>
                              <v-card color="blue" dark>

                              </v-card>
                           </v-flex>
                        </v-layout>
                     </v-flex>
                  </v-layout>
               </v-flex>
            </v-layout>
         </v-flex>
         <v-flex d-flex md5>
            <v-layout fix-layout row wrap>
               <v-flex d-flex md3>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="green" dark>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md5>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="green" dark>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md4>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="green" dark>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
            </v-layout>
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

import VueChartkick from "vue-chartkick";
import Chart from "chart.js";
Vue.use(VueChartkick, { adapter: Chart });

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data: () => ({
    map: {
      zoom: 13,
      center: L.latLng(55.755826, 37.6172999),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a  href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(55.755826, 37.6172999)
    },
    waste: {
      color: "green lighten-1",
      data: { "<20%": 20, "<80%": 60, ">80%": 20 },
      colors: ["#039BE5", "#8D6E63", "#D4E157"],
      bcolors: ["#FF0000", "#0000FF", "#00FFFF"],
      library: { legend: { display: false } }
    },
    parking: {
      free: 61,
      time: 18,
      color: "green lighten-1"
    },
    lamps: {
      power_on: "40/400",
      power: 527,
      color: "green lighten-1"
    },
    video: {
      color: "green lighten-1"
    },
    meters: {
      households: "21",
      power: "473",
      color: "green lighten-1"
    },
    air: {
      grade: "1",
      color: "green lighten-1"
    },
    weather: {
      temp: "+23",
      color: "green lighten-1"
    },
    power: {
      value: "90",
      incidents: 0,
      color: "green lighten-1"
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
