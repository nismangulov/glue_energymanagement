<template>
<v-container grid-list-md fill-height>

   <v-layout column>
      <v-flex d-flex md4>
            <v-layout class="fix-layout" row wrap>
               <v-flex d-flex md3>
                  <v-card :color="waste.color" dark>
                     <v-card-title primary class="title">Waste
                        <v-spacer></v-spacer>
                        <v-icon>fa-trash</v-icon>
                     </v-card-title>
                     <v-card-text>
                        <span class="title">Containers full: </span> <span class="headline">{{ waste.value }}%</span>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card :color="parking.color" dark>
                     <v-card-title primary class="title">Parking
                        <v-spacer></v-spacer>
                        <v-icon>fa-car</v-icon>
                     </v-card-title>
                     <v-card-text>
                        <span class="title">Free: </span> <span class="headline">{{ parking.value1 }}%</span><br>
                        <span class="title">Avg park time: </span> <span class="headline">{{ parking.value2 }}min</span>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card :color="sl.color" dark>
                     <v-card-title primary class="title">Smart Lighting
                        <v-spacer></v-spacer>
                        <v-icon>fa-lightbulb</v-icon>
                     </v-card-title>
                     <v-card-text>
                        <span class="title">Lamps on: </span><span class="headline">{{ sl.value1 }}</span><br>
                        <span class="title">Consumption: </span><span class="headline">{{ sl.value2 }}Wh</span>
                     </v-card-text>
                  </v-card>
               </v-flex>  
               <v-flex d-flex md3>
                  <v-card :color="video.color" dark>
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
                           <l-map :zoom="zoom" :center="center">
                              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                              <l-marker :lat-lng="marker"></l-marker>
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
                                      <v-card :color="meters.color" dark>
                                   <v-card-title primary class="title">Meters
                                     <v-spacer></v-spacer>
                                     <v-icon>fa-tachometer-alt</v-icon>
                                   </v-card-title>
                              <v-card-text>
                                <span class="title">Households in: </span> <span class="headline">{{ meters.value1 }}%</span><br>
                                <span class="title">Consumption: </span> <span class="headline">{{ meters.value2 }}Wh</span>
                            </v-card-text>
                              </v-card>
                                 </v-flex>
                                 <v-flex d-flex md6>
                                    <v-layout class="fix-layout" row wrap>
                                      <v-flex d-flex md6>
                                        <v-card :color="air.color" dark>
                                          <v-card-title primary class="title">Air 
                                            <v-spacer></v-spacer>
                                            <v-icon>fa-tree</v-icon>
                                          </v-card-title>
                                          <v-card-text>
                                            <span class="title">Quality grade: </span> <span class="headline">{{ air.value1 }}</span>
                                          </v-card-text>
                                       </v-card>
                                      </v-flex>
                                      <v-flex d-flex md6>
                                        <v-card :color="weather.color" dark>
                                          <v-card-title primary class="title">
                                            <v-spacer></v-spacer>
                                            <v-icon>fa-cloud</v-icon>
                                          </v-card-title>
                                          <v-card-text>
                                            <span class="title">Weather </span> <span class="headline">{{ weather.value1 }}C</span>
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
                             <v-card :color="power.color" dark  v-on:mouseenter="show=true"  v-on:mouseleave="show=false" >
                               <v-card-title primary class="title">Power
                                 <v-spacer></v-spacer>
                                 <v-icon v-show="false">fa-chart-bar</v-icon>
                               </v-card-title>
                               <v-card-text>
                                 <span class="title">Consumption: </span> <span class="headline">{{ power.value1 }}GWh</span><br>
                                 <span class="title">Incidents: </span> <span class="headline">{{ power.value2 }}</span>
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
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
Vue.use(VueAxios, Axios);

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data: () => ({
    zoom: 13,
    center: L.latLng(55.755826, 37.6172999),
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    marker: L.latLng(55.755826, 37.6172999),
    waste: {
      value: 24,
      color: "green lighten-1"
    },
    parking: {
      value1: 61,
      value2: 18,
      color: "green lighten-1"
      },
    sl: {
      value1: "40/400",
      value2: 527,
      color: "green lighten-1"
      },  
    video: { 
      color: "green lighten-1"
      },
    meters: {
      value1: "21",
      value2: "473",
      color: "green lighten-1"
      },
    air: {
      value1: "1",
      color: "green lighten-1"
      },
    weather: {
      value1: "+23",
      color: "green lighten-1"
      },
    power: {
      value1: "90",
      value2: 0,
      color: "green lighten-1"
      },
      show: false
  }),

  methods : {
   
  }
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
