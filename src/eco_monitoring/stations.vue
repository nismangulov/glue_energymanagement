<template>
   <v-container fill-height fluid>
      <v-layout row wrap>
         <v-flex d-flex md12>
            <v-card color="white">
               <v-data-table :headers="headers" :items="station_table" :pagination.sync="pagination">
                  <template slot="items" slot-scope="props">

                     <tr @click="$router.push({path: '/eco_monitoring/history'})">
                        <td>
                           <div>{{ props.item.name.value }}</div>
                        </td>
                        <td class="text-center">
                           <div>test</div>
                        </td>
                        <td class="text-center">
                           <div>test</div>
                        </td>
                        <td class="text-center">
                           <div>test</div>
                        </td>
                     </tr>
                  </template>
               </v-data-table>
            </v-card>
         </v-flex>
      </v-layout>
   </v-container>
</template>


<script>
//import tableData from "!json-loader!./stations.json";
import Vue from "vue";

import Axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, Axios);

export default {
  mounted: function() {
    this.download_data();
  },
  methods: {
    download_data() {
      Vue.axios
        .get("http://192.168.1.45:8080/we/weather_stations")
        .then(response => {
          this.station_table = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  data: () => ({
    pagination: { rowsPerPage: 25 },

    station_table: [],
    headers: [
      {
        text: "Name",
        value: "name.value",
        align: "left"
      },
      {
        text: "AQI",
        //value: "aqi",
        align: "center"
      },
      {
        text: "Type",
        //value: "type",
        align: "center"
      },
      {
        text: "Status",
        //value: "status",
        align: "center"
      }
    ]
  })
};
</script>




<style>
.fill-height {
  height: 100%;
}

.text-center {
  text-align: center;
}
</style>


<style scoped>
</style>
