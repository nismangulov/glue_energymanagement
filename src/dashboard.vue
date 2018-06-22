<template>
   <v-container grid-list-md fill-height>

      <v-layout column>
         <v-flex d-flex md4>
            <v-layout class="fix-layout" row wrap>
               <v-flex d-flex md3>
                  <v-card :color="waste.color" to="/waste/stat">
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
                  <v-card :color="parking.color" to="/parking/stat">
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
                  <v-card :color="lamps.color" to="/lighting/main">
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
                  <v-card :color="video.color" to="/safety/video">
                     <v-card-title primary class="title">Video
                        <v-spacer></v-spacer>
                        <v-icon>fa-video</v-icon>
                     </v-card-title>
                     <img class="cam-image" width="100%" height="60%" src="http://www.intek-m.ru/img/cams/cam_17/17_camera.jpg" />
                  </v-card>
               </v-flex>
            </v-layout>
         </v-flex>
         <v-flex d-flex md8>
            <v-layout row wrap>
               <v-flex d-flex md6>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="blue">
                           <l-map :zoom="map.zoom" :center="map.center">
                              <l-tile-layer :url="map.url" :attribution="map.attribution"></l-tile-layer>
                              <template v-for="marker in map.markers">
                                 <l-marker :lat-lng="marker.coordinates" @click="marker_click" v-bind:key="marker.name"></l-marker>
                              </template>
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
                                    <v-card :color="meters.color" to="/metering/meters">
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
                                          <v-card :color="air.color" to="/eco_monitoring/stations">
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
                                          <v-card :color="weather.color" to="/eco_monitoring/stations">
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
                              <v-card :color="power.color" to="/energy/stat">
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
      zoom: 12,
      center: L.latLng(55.697247, 37.357755),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a  href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markers: [
        {
          coordinates: L.latLng(55.696623, 37.356674),
          name: "Waste container #23",
          type: "waste"
        },
        {
          coordinates: L.latLng(55.696342, 37.359745),
          name: "Waste container #65",
          type: "waste"
        },
        {
          coordinates: L.latLng(55.699384, 37.366796),
          name: "Waste container #82",
          type: "waste"
        },
        {
          coordinates: L.latLng(55.70835, 37.374306),
          name: "Waste container #12",
          type: "waste"
        },
        {
          coordinates: L.latLng(55.683824, 37.335218),
          name: "Waste container #45",
          type: "waste"
        },
        {
          coordinates: L.latLng(55.680333, 37.345947),
          name: "Waste container #88",
          type: "waste"
        },
        {
          coordinates: L.latLng(55.694659, 37.3438),
          name: "Waste container #92",
          type: "waste"
        },
        {
          coordinates: L.latLng(55.685413, 37.353031),
          name: "Waste container #10",
          type: "waste"
        },
        {
          coordinates: L.latLng(55.679254, 37.34153),
          name: "Waste container #16",
          type: "waste"
        }
      ]
    },
    waste: {
      color: "nokia_green",
      data: { "<20%": 20, "<80%": 60, ">80%": 20 },
      colors: ["#039BE5", "#8D6E63", "#D4E157"],
      bcolors: ["#FF0000", "#0000FF", "#00FFFF"],
      library: { legend: { display: false } }
    },
    parking: {
      free: 61,
      time: 18,
      color: "nokia_gray_2"
    },
    lamps: {
      power_on: "40/400",
      power: 527,
      color: "nokia_green"
    },
    video: {
      color: "nokia_green"
    },
    meters: {
      households: "21",
      power: "473",
      color: "nokia_yellow"
    },
    air: {
      grade: "1",
      color: "nokia_green"
    },
    weather: {
      temp: "+23",
      color: "nokia_green"
    },
    power: {
      value: "90",
      incidents: 0,
      color: "nokia_red"
    }
  }),
  methods: {
    marker_click(event) {
      for (let index = 0; index < this.map.markers.length; index++) {
        if (
          event.latlng.lat == this.map.markers[index].coordinates.lat &&
          event.latlng.lng == this.map.markers[index].coordinates.lng
        ) {
          console.log(this.map.markers[index].name);
        }
      }
    }
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
