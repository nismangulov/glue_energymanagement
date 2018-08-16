<template>
   <v-container grid-list-md fill-height fluid>
      <v-layout column>
         <v-flex d-flex md6>
            <v-layout class="fix-layout" row wrap>
               <v-flex d-flex md6>
                  <v-card color="nokia_green">
                     <v-card-title primary class="title">
                        Max current
                     </v-card-title>
                     <v-card-text>
                        <div class="pb-3 display-2">
                           <span>60A</span>
                        </div>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md6>
                  <v-card color="nokia_green">
                     <v-card-title primary class="title">
                        Current
                     </v-card-title>
                     <v-card-text>
                        <div class="pb-3 display-2">
                           <span>20A</span>
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
                        Max temperature
                     </v-card-title>
                     <v-card-text>
                        <div class="pb-3 display-2">
                           <span>50°C</span>
                        </div>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md6>
                  <v-card color="nokia_green">
                     <v-card-title primary class="title">
                        Current temperature
                     </v-card-title>
                     <v-card-text>
                        <div class="pb-3 display-2">
                           <span>37°C</span>
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
