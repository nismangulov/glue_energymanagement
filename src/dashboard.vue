<template>
   <v-container grid-list-md fill-height>
      <v-layout column>
         <v-flex d-flex md4>
            <v-layout class="fix-layout" row wrap>
               <v-flex d-flex md3>
                  <v-card color="red" dark>
                     <v-card-title primary class="title">Waste</v-card-title>
                     <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card color="pink" dark>
                     <v-card-title primary class="title">Parkings</v-card-title>
                     <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card color="purple" dark>
                     <v-card-title primary class="title">Smart lighting</v-card-title>
                     <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card color="indigo" dark>
                     <v-card-title primary class="title">Video</v-card-title>
                     <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
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
                                    <v-card color="green" dark>
                                       <v-card-title primary class="title">Meters</v-card-title>
                                       <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
                                    </v-card>
                                 </v-flex>
                                 <v-flex d-flex md6>
                                    <v-layout class="fix-layout" row wrap>
                                       <v-flex d-flex md6>
                                          <v-card color="orange" dark>
                                             <v-card-title primary class="title">Air</v-card-title>
                                             <v-card-text>{{ lorem.slice(0, 45) }}</v-card-text>
                                          </v-card>
                                       </v-flex>
                                       <v-flex d-flex md6>
                                          <v-card color="lime" dark>
                                             <v-card-title primary class="title">Weather</v-card-title>
                                             <v-card-text>{{ lorem.slice(0, 45) }}</v-card-text>
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
                              <v-card color="teal" dark>
                                 <v-card-title primary class="title">Power</v-card-title>
                                 <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
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
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
Vue.use(VueAxios, Axios);

export default {
   components: {
      LMap,
      LTileLayer,
      LMarker
   },
   data: () => ({
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      zoom: 13,
      center: L.latLng(55.755826, 37.6172999),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(55.755826, 37.6172999),
   }),
};
</script>

<style>
   @import "../node_modules/leaflet/dist/leaflet.css";

   .container.fill-height .layout.fix-layout {
      height: calc(100% + 8px)
   }

   .container.fill-height .layout.fix-layout-large {
      height: calc(100% + 16px)
   }

   .move-top {
      margin-top: -8px;
   }
</style>