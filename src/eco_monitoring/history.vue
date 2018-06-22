<template>
   <v-container fill-height>
      <v-layout row wrap>
         <v-flex d-flex md12>
            <v-card color="grafana_grey">
               <v-card-text>
                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/qZHI1x7iz/weather_smartsityapp?refresh=1m&panelId=20&orgId=1" width="100%" height="200" frameborder="0"></iframe>

                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/qZHI1x7iz/weather_smartsityapp?refresh=1m&panelId=15&orgId=1" width="100%" height="200" frameborder="0"></iframe>

                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/qZHI1x7iz/weather_smartsityapp?refresh=1m&panelId=18&orgId=1" width="100%" height="200" frameborder="0"></iframe>

                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/qZHI1x7iz/weather_smartsityapp?refresh=1m&panelId=11&orgId=1" width="100%" height="200" frameborder="0"></iframe>

                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/qZHI1x7iz/weather_smartsityapp?refresh=1m&panelId=9&orgId=1" width="100%" height="200" frameborder="0"></iframe>

                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/qZHI1x7iz/weather_smartsityapp?refresh=1m&panelId=8&orgId=1" width="100%" height="200" frameborder="0"></iframe>

               </v-card-text>
            </v-card>
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


<style>
.fill-height {
  height: 100%;
}
</style>


<style scoped>
</style>
