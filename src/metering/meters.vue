<template>
   <v-container fill-height>
      <v-layout row wrap>
         <v-flex d-flex md12>
            <v-card color="grafana_grey">
               <v-card-text>
                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/Rfv-XEHmk/power?refresh=5s&orgId=1&panelId=6" width="100%" height="200" frameborder="0"></iframe>
                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/Rfv-XEHmk/power?refresh=5s&orgId=1&panelId=8" width="100%" height="200" frameborder="0"></iframe>
                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/Rfv-XEHmk/power?refresh=5s&orgId=1&panelId=2" width="100%" height="200" frameborder="0"></iframe>
                  <iframe src="https://sk.iot.nokia.com/grafana/d-solo/Rfv-XEHmk/power?refresh=5s&orgId=1&panelId=4" width="100%" height="200" frameborder="0"></iframe>
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



