<template>
   <v-container fill-height>
      <v-layout row wrap>
         <v-flex d-flex md12>
            <v-card color="white">
               <v-data-table :headers="headers" :items="station_table" :pagination.sync="pagination">
                  <template slot="items" slot-scope="props">

                     <tr @click="$router.push({path: '/eco_monitoring/history'})">
                        <td>
                           <div>{{ props.item.name }}</div>
                        </td>
                        <td>
                           <div>{{ props.item.coordinates }}</div>
                        </td>
                        <td>
                           <div>{{ props.item.type }}</div>
                        </td>
                        <td>
                           <div>{{ props.item.status }}</div>
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
import tableData from "!json-loader!./stations.json";

export default {
  data: () => ({
    pagination: { rowsPerPage: 25 },

    station_table: tableData,
    headers: [
      {
        text: "Name",
        value: "name",
        align: "left"
      },
      {
        text: "Coordinates",
        value: "coordinates",
        sortable: false
      },
      {
        text: "Type",
        value: "type",
        align: "center"
      },
      {
        text: "Status",
        value: "status",
        sortable: false
      }
    ]
  })
};
</script>




<style>
.fill-height {
  height: 100%;
}
</style>


<style scoped>
</style>
