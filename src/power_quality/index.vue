<template>
   <v-container fill-height fluid>
      <v-layout row wrap>
         <v-flex d-flex md12>
            <v-card color="transparent" class="no-shadow">
               <v-data-table class="power-table" :headers="headers" :items="items" hide-actions>
                  <template slot="items" slot-scope="props">
                     <td class="text-xs-left" :style="get_row_color(props.item.index)">
                        <div>{{ props.item.parameter }}</div>
                     </td>
                     <td class="text-xs-left" :style="get_row_color(props.item.index)">
                        <div>{{ props.item.value }}</div>
                     </td>
                     <td class="text-xs-left" :style="get_row_color(props.item.index)">
                        <div>{{ props.item.index }}</div>
                     </td>
                     <td v-if="props.index === 0" class="text-xs-left text-center cell-max" :rowspan="items.length" :style="get_row_color(get_max_value())">
                        {{ get_max_value() }}
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
            value: "parameter",
            sorting: false
         },
         {
            text: "Value",
            value: "value"
         },
         {
            text: "Index",
            value: "index"
         },
         {
            text: "Max"
         }
      ],
      items: [
         {
        parameter: "Power factor",
        value: "Cosφ = 1.2",
            index: "1.2"
         },
         {
        parameter: "Total harmonic distortion",
            value: "1.7",
            index: "1.7"
         },
         {
        parameter: "Frequency deviation",
        value: "50.5 Hz",
            index: "1.2"
         },
         {
        parameter: "Voltage deviation",
        value: "236",
        index: "1"
         },
         {
        parameter: "Phase imbalance",
        value: "30% (L1-L3)",
        index: "2"
      }
      ]
   }),
   methods: {
      get_row_color(value) {
         if (value < 1.1) {
        return "background-color: #DCE9D6;";
         } else if (value < 2) {
        return "background-color: #FDF1D3;";
         }

      return "background-color: #EDCCCC;";
      },
      get_max_value() {
      let arr = this.items.map(item => item.index);

      return Math.max(...arr);
      }
   }
};
</script>

<style scoped>
   .no-shadow {
      box-shadow: none;
   }

   .no-shadow > div {
      box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
   }

   .text-center {
      text-align: center !important;
   }

   .cell-max {
      border-bottom: none;
      border-left: 1px solid rgba(0,0,0,.12);
   }
</style>

<style>
   .application .power-table .theme--light.v-table tbody tr,
   .theme--light .power-table .v-table tbody tr {
      border-bottom: 1px solid rgba(0,0,0,.12);
   }
</style>
