<template>
   <v-container grid-list-md fill-height fluid>
      <v-layout column>
         <v-flex d-flex md6>
            <v-layout class="fix-layout" row wrap>
               <v-flex d-flex md4>
                  <v-card :color="power_quality.color" to="/power_quality">
                     <div class="chart-background">
                        <bar-chart :data="power_quality.chartData" :hideAxis="true" :isDashboard="true"></bar-chart>
                     </div>
                     <v-card-title primary class="title">Power quality index
                        <v-spacer></v-spacer>
                        <v-icon>fa-weight</v-icon>
                     </v-card-title>
                  </v-card>
               </v-flex>
               <v-flex d-flex md4>
                  <v-card :color="phase_current_balance.color" to="/phase_current_balance">
                     <div class="chart-background">
                        <bar-chart :data="phase_current_balance.chartData" :hideAxis="true" :isDashboard="true"></bar-chart>
                     </div>
                     <v-card-title primary class="title">Phase current balance
                        <v-spacer></v-spacer>
                        <v-icon>fa-balance-scale</v-icon>
                     </v-card-title>
                  </v-card>
               </v-flex>
               <v-flex d-flex md4>
                  <v-card :color="scheduled_maintenance.color" to="/scheduled_maintenance">
                     <div class="chart-background">
                        <bar-chart :data="scheduled_maintenance.chartData" :hideAxis="true" :isDashboard="true"></bar-chart>
                     </div>
                     <v-card-title primary class="title">Scheduled maintenance
                        <v-spacer></v-spacer>
                        <v-icon>fa-clock</v-icon>
                     </v-card-title>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-flex>
         <v-flex d-flex md6>
            <v-layout class="fix-layout" row wrap>
               <v-flex d-flex md4>
                  <v-card :color="electrical_shields.color" to="/electrical_shields">
                     <div class="chart-background">
                        <bar-chart :data="electrical_shields.chartData" :hideAxis="true" :isDashboard="true"></bar-chart>
                     </div>
                     <v-card-title primary class="title">Electrical shields status
                        <v-spacer></v-spacer>
                        <v-icon>fa-bolt</v-icon>
                     </v-card-title>
                  </v-card>
               </v-flex>
               <v-flex d-flex md4>
                  <v-card :color="problems.color" to="/problems">
                     <div class="chart-background">
                        <bar-chart :data="problems.chartData" :hideAxis="true" :isDashboard="true"></bar-chart>
                     </div>
                     <v-card-title primary class="title">Problems and failures
                        <v-spacer></v-spacer>
                        <v-icon>fa-exclamation-triangle</v-icon>
                     </v-card-title>
                  </v-card>
               </v-flex>
               <v-flex d-flex md4>
                  <v-card :color="energy_consumption.color" to="/energy_consumption">
                     <div class="chart-background">
                        <bar-chart :data="energy_consumption.chartData" :hideAxis="true" :isDashboard="true"></bar-chart>
                     </div>
                     <v-card-title primary class="title">Energy consumption profiles
                        <v-spacer></v-spacer>
                        <v-icon>fa-lightbulb</v-icon>
                     </v-card-title>
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

import BarChart from "./common/charts/BarChart";

export default {
   components: {
      BarChart
   },
   data: () => ({
      power_quality: {
         color: "nokia_green",
         chartData: [
         { title: "5 июля", value: 1 },
         { title: "6 июля", value: 2 },
         { title: "7 июля", value: 1 },
         { title: "8 июля", value: 1 },
         { title: "9 июля", value: 2 },
         { title: "10 июля", value: 4 },
         { title: "11 июля", value: 3 }
         ]
      },
      phase_current_balance: {
         color: "nokia_green",
         chartData: [
         { title: "5 июля", value: 1 },
         { title: "6 июля", value: 2 },
         { title: "7 июля", value: 1 },
         { title: "8 июля", value: 1 },
         { title: "9 июля", value: 2 },
         { title: "10 июля", value: 4 },
         { title: "11 июля", value: 3 }
         ]
      },
      scheduled_maintenance: {
         color: "nokia_green",
         chartData: [
         { title: "5 июля", value: 1 },
         { title: "6 июля", value: 2 },
         { title: "7 июля", value: 1 },
         { title: "8 июля", value: 1 },
         { title: "9 июля", value: 2 },
         { title: "10 июля", value: 4 },
         { title: "11 июля", value: 3 }
         ]
      },
      electrical_shields: {
         color: "nokia_green",
         chartData: [
         { title: "5 июля", value: 1 },
         { title: "6 июля", value: 2 },
         { title: "7 июля", value: 1 },
         { title: "8 июля", value: 1 },
         { title: "9 июля", value: 2 },
         { title: "10 июля", value: 4 },
         { title: "11 июля", value: 3 }
         ]
      },
      problems: {
         color: "nokia_green",
         chartData: [
         { title: "5 июля", value: 1 },
         { title: "6 июля", value: 2 },
         { title: "7 июля", value: 1 },
         { title: "8 июля", value: 1 },
         { title: "9 июля", value: 2 },
         { title: "10 июля", value: 4 },
         { title: "11 июля", value: 3 }
         ]
      },
      energy_consumption: {
         color: "nokia_green",
         chartData: [
         { title: "5 июля", value: 1 },
         { title: "6 июля", value: 2 },
         { title: "7 июля", value: 1 },
         { title: "8 июля", value: 1 },
         { title: "9 июля", value: 2 },
         { title: "10 июля", value: 4 },
         { title: "11 июля", value: 3 }
         ]
      },
   })
};
</script>

<style>
.container.fill-height .layout.fix-layout {
   height: calc(100% + 8px);
}

.container.fill-height .layout.fix-layout-large {
   height: calc(100% + 16px);
}

.move-top {
   margin-top: -8px;
}

.chart {
   height: calc(100% - 56px);
}

.card {
   z-index: 2;
   overflow: hidden;
}

.chart-background {
   position: absolute;
   top: 0px;
   left: 0px;
   height: 100%;
   width: 100%;
   opacity: 0.3;
   display: flex;
   align-items: flex-end;
   justify-content: center;
   z-index: 1;
}
</style>
