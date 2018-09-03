<template>
   <v-container grid-list-md fill-height fluid>
      <v-layout column>
         <v-flex d-flex md6>
            <v-layout class="fix-layout" row wrap>
               <v-flex d-flex md6>
                  <v-card color="nokia_green">
                     <v-card-title primary class="title">
                        Shield #1
                     </v-card-title>
                     <v-card-text>
                        <div class="pb-4 display-2">
                           Status:
                           <span>Normal</span>
                        </div>
                        <div class="pb-1 display-1">
                           Current:
                           <span>23A</span>
                        </div>
                        <div class="pb-1 display-1">
                           Max current:
                           <span>60A</span>
                        </div>
                        <div class="pb-1 display-1">
                           Temperature
                           <span>32°C</span>
                        </div>
                        <div class="pb-1 display-1">
                           Max temperature
                           <span>60°C</span>
                        </div>
                        <div class="pb-1 display-1">
                           Door:
                           <span>Opened</span>
                        </div>
                        <div class="pb-1 display-1">
                           Address:
                           <span>Маршала Тухачевского, 50к2</span>
                        </div>
                        <div class="pb-1 display-1">
                           Coordinates:
                           <span>55.786427, 37.461773</span>
                        </div>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md6>
                  <v-card color="nokia_green">
                     <v-card-title primary class="title">
                        Shield #2
                     </v-card-title>
                     <v-card-text>
                        <div class="pb-4 display-2">
                           Status:
                           <span>Normal</span>
                        </div>
                        <div class="pb-1 display-1">
                           Current:
                           <span>54A</span>
                        </div>
                        <div class="pb-1 display-1">
                           Max current:
                           <span>60A</span>
                        </div>
                        <div class="pb-1 display-1">
                           Temperature
                           <span>47°C</span>
                        </div>
                        <div class="pb-1 display-1">
                           Max temperature
                           <span>60°C</span>
                        </div>
                        <div class="pb-1 display-1">
                           Door:
                           <span>Unauthorized access</span>
                        </div>
                        <div class="pb-1 display-1">
                           Address:
                           <span>Лобачевского, 26</span>
                        </div>
                        <div class="pb-1 display-1">
                           Coordinates:
                           <span>55.669398, 37.506877</span>
                        </div>
                     </v-card-text>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-flex>
         <v-flex d-flex md6>
            <v-layout class="fix-layout" row wrap>
               <v-flex d-flex md6>
                  <v-card color="nokia_green">
                     <v-card-title primary class="title">
                        Shield #3
                     </v-card-title>
                     <v-card-text>
                        <div class="pb-4 display-2">
                           Status:
                           <span>Normal</span>
                        </div>
                        <div class="pb-1 display-1">
                           Current:
                           <span>43A</span>
                        </div>
                        <div class="pb-1 display-1">
                           Max current:
                           <span>60A</span>
                        </div>
                        <div class="pb-1 display-1">
                           Temperature
                           <span>28°C</span>
                        </div>
                        <div class="pb-1 display-1">
                           Max temperature
                           <span>60°C</span>
                        </div>
                        <div class="pb-1 display-1">
                           Door:
                           <span>Closed</span>
                        </div>
                        <div class="pb-1 display-1">
                           Address:
                           <span>Марьинский Парк, 35</span>
                        </div>
                        <div class="pb-1 display-1">
                           Coordinates:
                           <span>55.666869, 37.788791</span>
                        </div>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md6>
                  <v-card color="nokia_green">
                     <v-card-title primary class="title">
                        Shield #4
                     </v-card-title>
                     <v-card-text>
                        <div class="pb-4 display-2">
                           Status:
                           <span>Normal</span>
                        </div>
                        <div class="pb-1 display-1">
                           Current:
                           <span>67A</span>
                        </div>
                        <div class="pb-1 display-1">
                           Max current:
                           <span>120A</span>
                        </div>
                        <div class="pb-1 display-1">
                           Temperature
                           <span>33°C</span>
                        </div>
                        <div class="pb-1 display-1">
                           Max temperature
                           <span>60°C</span>
                        </div>
                        <div class="pb-1 display-1">
                           Door:
                           <span>Closed</span>
                        </div>
                        <div class="pb-1 display-1">
                           Address:
                           <span>Николая Химушина, 11к2</span>
                        </div>
                        <div class="pb-1 display-1">
                           Coordinates:
                           <span>55.822162, 37.760241</span>
                        </div>
                     </v-card-text>
                  </v-card>
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

export default {
  data: () => ({})
};
</script>
