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

                              <template v-for="parking in parkings">
                                 <l-polygon :lat-lngs="parking.polygone_coordinates" :color="polygon_color" v-bind:key="parking.name">
                                    <l-popup :content="generate_text(parking.places, parking.free, parking.name)"></l-popup>
                                 </l-polygon>
                              </template>
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

import { LMap, LTileLayer, LPolygon, LPopup } from "vue2-leaflet";

import VueChartkick from "vue-chartkick";
import Chart from "chart.js";
Vue.use(VueChartkick, { adapter: Chart });

export default {
  components: {
    LMap,
    LTileLayer,
    LPolygon,
    LPopup
  },
  data: () => ({
    map: {
      zoom: 13,
      center: L.latLng(55.696767, 37.356644),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a  href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    },
    parkings: [
      {
        polygone_coordinates: [
          [55.696767, 37.356644],
          [55.696364, 37.356644],
          [55.696354, 37.357194],
          [55.696776, 37.357199]
        ],
        name: "Parking #1",
        places: 38,
        free: 29
      },
      {
        polygone_coordinates: [
          [55.696529, 37.354085],
          [55.696404, 37.354082],
          [55.696401, 37.355214],
          [55.696538, 37.355228]
        ],
        name: "Parking #2",
        places: 41,
        free: 12
      },
      {
        polygone_coordinates: [
          [55.696522, 37.359247],
          [55.696506, 37.361262],
          [55.696468, 37.361264],
          [55.696465, 37.359261]
        ],
        name: "Parking #3",
        places: 5,
        free: 2
      },
      {
        polygone_coordinates: [
          [55.688794, 37.355936],
          [55.688842, 37.354037],
          [55.687066, 37.354316],
          [55.687066, 37.354584],
          [55.686824, 37.354745],
          [55.686794, 37.355421],
          [55.688327, 37.355926]
        ],
        name: "Parking #4",
        places: 115,
        free: 54
      },
      {
        polygone_coordinates: [
          [55.686471, 37.335783],
          [55.686138, 37.336759],
          [55.687292, 37.338111],
          [55.68762, 37.337124]
        ],
        name: "Parking #5",
        places: 54,
        free: 23
      },
      {
        polygone_coordinates: [
          [55.688027, 37.336057],
          [55.687739, 37.337296],
          [55.687451, 37.338278],
          [55.687538, 37.338495],
          [55.688475, 37.338264],
          [55.688869, 37.337094]
        ],
        name: "Parking #6",
        places: 55,
        free: 10
      }
    ],
    polygon_color: "#ff00ff"
  }),
  methods: {
    generate_text(all_places, free, name) {
      let occuped = all_places - free;
      let occuped_percent = Math.round(occuped / (all_places / 100));
      let text =
        name +
        "<br>" +
        "All: " +
        all_places +
        "<br>" +
        "Occuped: " +
        occuped +
        " (" +
        occuped_percent +
        "%)" +
        "<br>" +
        "Free: " +
        free;
      return text;
    }
  }
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
