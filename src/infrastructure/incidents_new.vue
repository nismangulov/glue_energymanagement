<template>
   <v-container fill-height fluid>
      <v-layout row wrap>
         <v-flex d-flex md12>
            <v-card color="white">
               <v-data-table :headers="headers" :items="table" :pagination.sync="pagination">
                  <template slot="items" slot-scope="props">

                     <tr>
                        <td>
                           <div>{{ props.item.system }}</div>
                        </td>
                        <td class="text-center">
                           <div>{{ props.item.status }}</div>
                        </td>
                        <td class="text-center">
                           <div>{{ props.item.incidents }}</div>
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
import tableData from "!json-loader!./incidents.json";

export default {
  data: () => ({
    pagination: { rowsPerPage: 25 },

    table: tableData,
    headers: [
      {
        text: "System",
        value: "system",
        align: "left"
      },
      {
        text: "Status",
        value: "status",
        align: "center"
      },
      {
        text: "Incidents",
        value: "incidents",
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
