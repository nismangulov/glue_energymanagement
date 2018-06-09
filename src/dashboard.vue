<template>
   <v-container grid-list-md fill-height>

      <v-layout column>
         <v-flex d-flex md4>
            <v-layout class="fix-layout" row wrap>
               <v-flex d-flex md3>
                  <v-card :color="waste.color" dark to="/waste/stat">
                     <v-card-title primary class="title">Waste
                        <v-spacer></v-spacer>
                        <v-icon>fa-trash</v-icon>
                     </v-card-title>
                     <v-card-text class="pt-0">
                        <pie-chart :donut="true" :data="waste.data" width="60%" height="100%" :colors="waste.colors" :bcolors="waste.bcolors" :library="waste.library" class="mx-auto mt-0"></pie-chart>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card :color="parking.color" dark to="/parking/stat ">
                     <v-card-title primary class="title">Parking
                        <v-spacer></v-spacer>
                        <v-icon>fa-car</v-icon>
                     </v-card-title>
                     <v-card-text>
                        <span class="title">Free: </span>
                        <span class="headline">{{ parking.free }}%</span><br>
                        <span class="title">Avg park time: </span>
                        <span class="headline">{{ parking.time }}min</span>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card :color="lamps.color" dark to="/lighting/main">
                     <v-card-title primary class="title">Smart Lighting
                        <v-spacer></v-spacer>
                        <v-icon>fa-lightbulb</v-icon>
                     </v-card-title>
                     <v-card-text>
                        <span class="title">Lamps on: </span>
                        <span class="headline">{{ lamps.power_on }}</span><br>
                        <span class="title">Consumption: </span>
                        <span class="headline">{{ lamps.power }}Wh</span>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card :color="video.color" dark to="/safety/video">
                     <v-card-title primary class="title">Video
                        <v-spacer></v-spacer>
                        <v-icon>fa-video</v-icon>
                     </v-card-title>
                     <v-card-text>
                        <span class="caption">Selected camera stream </span>
                     </v-card-text>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-flex>
         <v-flex d-flex md8>
            <v-layout row wrap>
               <v-flex d-flex md6>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="blue" dark>
                           <l-map :zoom="map.zoom" :center="map.center">
                              <l-tile-layer :url="map.url" :attribution="map.attribution"></l-tile-layer>
                              <l-marker :lat-lng="map.marker"></l-marker>
                           </l-map>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md6>
                  <v-layout column>
                     <v-flex d-flex md6>
                        <v-layout row wrap>
                           <v-flex class="fix-layout" d-flex md12>
                              <v-layout class="fix-layout" row wrap>
                                 <v-flex d-flex md6>
                                    <v-card :color="meters.color" dark to="/metering/meters">
                                       <v-card-title primary class="title">Meters
                                          <v-spacer></v-spacer>
                                          <v-icon>fa-tachometer-alt</v-icon>
                                       </v-card-title>
                                       <v-card-text>
                                          <span class="title">Households in: </span>
                                          <span class="headline">{{ meters.households }} %</span><br>
                                          <span class="title">Consumption: </span>
                                          <span class="headline">{{ meters.power }} Wh</span>
                                       </v-card-text>
                                    </v-card>
                                 </v-flex>
                                 <v-flex d-flex md6>
                                    <v-layout class="fix-layout" row wrap>
                                       <v-flex d-flex md6>
                                          <v-card :color="air.color" dark to="/eco_monitoring/stations">
                                             <v-card-title primary class="title">Air
                                                <v-spacer></v-spacer>
                                                <v-icon>fa-tree</v-icon>
                                             </v-card-title>
                                             <v-card-text>
                                                <span class="title">Quality grade: </span>
                                                <span class="headline">{{ air.grade }}</span>
                                             </v-card-text>
                                          </v-card>
                                       </v-flex>
                                       <v-flex d-flex md6>
                                          <v-card :color="weather.color" dark to="/eco_monitoring/stations">
                                             <v-card-title primary class="title">
                                                <v-spacer></v-spacer>
                                                <v-icon>fa-cloud</v-icon>
                                             </v-card-title>
                                             <v-card-text>
                                                <span class="title">Weather </span>
                                                <span class="headline">{{ weather.temp }}C</span>
                                             </v-card-text>
                                          </v-card>
                                       </v-flex>
                                    </v-layout>
                                 </v-flex>
                              </v-layout>
                           </v-flex>
                        </v-layout>
                     </v-flex>
                     <v-flex class="move-top" d-flex md6>
                        <v-layout class="fix-layout-large" row wrap>
                           <v-flex d-flex md12>
                              <v-card :color="power.color" dark to="/energy/stat">
                                 <v-card-title primary class="title">Power
                                    <v-spacer></v-spacer>
                                    <v-icon>fa-chart-bar</v-icon>
                                 </v-card-title>
                                 <v-card-text>
                                    <span class="title">Consumption: </span>
                                    <span class="headline">{{ power.value }}GWh</span><br>
                                    <span class="title">Incidents: </span>
                                    <span class="headline">{{ power.incidents }}</span>
                                 </v-card-text>
                              </v-card>
                           </v-flex>
                        </v-layout>
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
@import "../node_modules/leaflet/dist/leaflet.css";

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
