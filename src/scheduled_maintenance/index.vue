<template>
   <v-container fill-height fluid>
      <v-layout row wrap>
         <v-flex d-flex md12>
            <v-card color="transparent" class="no-shadow">
               <v-data-table :headers="headers" :items="items">
                  <template slot="items" slot-scope="props">
                     <td class="text-xs-left">
                        <div>{{ props.item.parameter }}</div>
                     </td>
                     <td class="text-xs-left">
                        <div>{{ props.item.value }}</div>
                     </td>
                     <td class="text-xs-left">
                        <div>{{ props.item.index }}</div>
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
            text: "Parameter",
            value: "parameter"
         },
         {
            text: "Value",
            value: "value"
         },
         {
            text: "Index",
            value: "index"
         }
      ],
      items: [
         {
            parameter: "Power factor index",
            value: "1.2",
            index: "1.2"
         },
         {
            parameter: "Total harmonic distortion index",
            value: "1.7",
            index: "1.7"
         },
         {
            parameter: "Frequency deviation index",
            value: "1.2",
            index: "1.2"
         },
         {
            parameter: "Voltage deviation index",
            value: "1.1",
            index: "1.1"
         },
         {
            parameter: "Phase imbalance index",
            value: "1",
            index: "1"
         },
      ]
   })
};
</script>

<style scoped>
   .no-shadow {
      box-shadow: none;
   }

   .no-shadow > div {
      box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
   }
</style>
