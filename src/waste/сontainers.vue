<template>
   <v-container grid-list-md fill-height>

      <v-layout column fix-layout>
         <v-flex d-flex md7>
            <v-layout fix-layout row wrap>
               <v-flex d-flex md6>
                  <v-layout fix-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card>
                           <v-data-table :headers="table_headers" :items="table_containers" class="elevation-1">
                              <template slot="items" slot-scope="props">
                                 <td>{{ props.item.name }}</td>
                                 <td>{{ props.item.address }}</td>
                                 <td>{{ props.item.level }}</td>
                                 <td>{{ props.item.active }}</td>
                              </template>
                           </v-data-table>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
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
            </v-layout>
         </v-flex>
         <v-flex d-flex md5>
            <v-layout fix-layout row wrap>
               <v-flex d-flex md5>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="cyan lighten-2" dark>
                           <v-card-title primary class="title">Daily filling level
                           </v-card-title>
                           <v-card-text class="pt-0">
                              <column-chart width="90%" height="100%" class="mx-auto mt-2" :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
                           </v-card-text>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md2>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="indigo lighten-2" dark>
                           <v-card-title primary class="title">Filling level
                           </v-card-title>
                           <v-card-text class="pt-0">
                              <pie-chart :data="waste.data" width="60%" height="100%" :colors="waste.colors" :bcolors="waste.bcolors" :library="waste.library" class="mx-auto mt-2"></pie-chart>
                           </v-card-text>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md2>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="blue lighten-3" dark>
                           <v-card-title primary class="title">Number of containers
                           </v-card-title>
                           <v-card-text class="pt-0">
                              <pie-chart :donut="true" :data="waste.data" width="60%" height="100%" :colors="waste.colors" :bcolors="waste.bcolors" :library="waste.library" class="mx-auto mt-2"></pie-chart>
                           </v-card-text>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md3>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="teal lighten-2" dark>
                           <v-card-text class="pt-0">
                              <v-card-title primary class="title">Active containers
                              </v-card-title>
                              <pie-chart :donut="true" :data="waste.data" width="60%" height="100%" :colors="waste.colors" :bcolors="waste.bcolors" :library="waste.library" class="mx-auto mt-2"></pie-chart>
                           </v-card-text>
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
      marker: L.latLng(55.755826, 37.6172999)
    },

    table_headers: [
      { text: "Name", value: "name" },
      { text: "Address", value: "address" },
      { text: "Level", value: "level" },
      { text: "Battery", value: "active" }
    ],
    table_containers: [
      {
        address: "SK, malevicha-1",
        name: "Waste container 1",
        level: "20%",
        active: "100%"
      },
      {
        address: "SK, malevicha-1",
        name: "Waste container 2",
        level: "50%",
        active: "90%"
      },
      {
        address: "SK, malevicha-1",
        name: "Waste container 3",
        level: "70%",
        active: "100%"
      },
      {
        address: "SK, malevicha-1",
        name: "Waste container 4",
        level: "70%",
        active: "100%"
      },
      {
        address: "SK, malevicha-1",
        name: "Waste container 5",
        level: "70%",
        active: "100%"
      },
      {
        address: "SK, malevicha-1",
        name: "Waste container 6",
        level: "70%",
        active: "100%"
      }
    ],
    waste: {
      color: "green lighten-1",
      data: { "<20%": 20, "<80%": 60, ">80%": 20 },
      colors: ["#039BE5", "#8D6E63", "#D4E157"],
      bcolors: ["#FF0000", "#0000FF", "#00FFFF"],
      library: { legend: { display: true } }
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
