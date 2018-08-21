<template>
   <v-container fill-height fluid>
      <v-layout row wrap>
         <v-flex d-flex md12>
            <v-card color="transparent" class="no-shadow">
               <v-data-table :headers="headers" :items="items">
                  <template slot="items" slot-scope="props">
                     <td class="text-xs-left">
                        <div>{{ props.item.device }}</div>
                     </td>
                     <td class="text-xs-left">
                        <div>{{ props.item.hours_work }}</div>
                     </td>
                     <td class="text-xs-left">
                        <div>{{ props.item.next_maintrance }}</div>
                     </td>
                  </template>
               </v-data-table>
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
  data: () => ({
    headers: [
      {
        text: "Device",
        value: "device"
      },
      {
        text: "Work hours",
        value: "hours_work"
      },
      {
        text: "Next maintrance",
        value: "next_maintrance"
      }
    ],
    items: [
      {
        device: "Compressor",
        hours_work: "3242",
        next_maintrance: "12000"
      },
      {
        device: "Air cooler",
        hours_work: "3294",
        next_maintrance: "2300"
      },
      {
        device: "Refrigerator",
        hours_work: "128",
        next_maintrance: "10012"
      },
      {
        device: "Generator",
        hours_work: "32100",
        next_maintrance: "124"
      }
    ]
  })
};
</script>

<style scoped>
.no-shadow {
  box-shadow: none;
}

.no-shadow > div {
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
}
</style>
