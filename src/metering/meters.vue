<template>
   <v-container fill-height>
      <v-layout row wrap>
         <v-flex d-flex md12>
            <v-card color="grafana_grey">

               <v-card-text>
                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/bSq3Tx7mz/power_smartsityapp?refresh=1m&panelId=6&orgId=1&tab=legend" width="100%" height="200" frameborder="0"></iframe>

                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/bSq3Tx7mz/power_smartsityapp?refresh=1m&panelId=8&orgId=1&tab=legend" width="100%" height="200" frameborder="0"></iframe>

                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/bSq3Tx7mz/power_smartsityapp?refresh=1m&panelId=4&orgId=1&tab=legend" width="100%" height="200" frameborder="0"></iframe>

                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/bSq3Tx7mz/power_smartsityapp?refresh=1m&panelId=2&orgId=1&tab=legend" width="100%" height="200" frameborder="0"></iframe>

               </v-card-text>
            </v-card>
         </v-flex>
      </v-layout>
   </v-container>
</template>


<script>
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



