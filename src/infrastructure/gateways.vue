<template>
   <v-container fill-height>
      <v-layout row wrap>
         <v-flex d-flex md12>
            <v-card color="white">
               <v-data-table :headers="headers" :items="table" :pagination.sync="pagination">
                  <template slot="items" slot-scope="props">

                     <tr>
                        <td>
                           <div>{{ props.item.name }}</div>
                        </td>
                        <td class="text-center">
                           <div>{{ props.item.devices }}</div>
                        </td>
                        <td class="text-center">
                           <div>{{ props.item.type }}</div>
                        </td>
                        <td class="text-center">
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
import tableData from "!json-loader!./gateways.json";

export default {
  data: () => ({
    pagination: { rowsPerPage: 25 },

    table: tableData,
    headers: [
      {
        text: "Name",
        value: "name",
        align: "left"
      },
      {
        text: "Connected devices",
        value: "devices",
        align: "center"
      },
      {
        text: "Type",
        value: "type",
        align: "center"
      },
      {
        text: "Status",
        value: "status",
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
