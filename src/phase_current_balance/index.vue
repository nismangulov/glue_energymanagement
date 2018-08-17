<template>
   <v-container grid-list-md fill-height fluid>
      <v-layout column>
         <v-flex d-flex md6>
            <v-layout class="fix-layout" row wrap>
               <v-flex d-flex md4>
                  <v-card color="grafana_grey">
                     <v-card-title primary class="title">
                        L1
                     </v-card-title>
                     <v-card-text class="card-text">
                        <voltage-chart :value="lineFirst"></voltage-chart>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md4>
                  <v-card color="grafana_grey">
                     <v-card-title primary class="title">
                        L2
                     </v-card-title>
                     <v-card-text class="card-text">
                        <voltage-chart :value="lineSecond"></voltage-chart>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md4>
                  <v-card color="grafana_grey">
                     <v-card-title primary class="title">
                        L3
                     </v-card-title>
                     <v-card-text class="card-text">
                        <voltage-chart :value="lineThird"></voltage-chart>
                     </v-card-text>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-flex>
         <v-flex d-flex md6>
            <v-layout class="fix-layout" row wrap></v-layout>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
import Vue from "vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import VoltageChart from "../common/charts/VoltageChart.vue"
Vue.use(VueAxios, Axios);

export default {
   components: {
      VoltageChart
   },
   data: () => ({
      lineFirst: 252,
      lineSecond: 202,
      lineThird: 273
   })
};
</script>

<style scoped>
   .card-text {
      height: calc(100% - 52px);
   }
</style>
