<template>
   <v-container grid-list-md fill-height>

      <v-layout column fix-layout>
         <v-flex d-flex md7>
            <v-layout fix-layout row wrap>
               <v-flex d-flex md6>
                  <v-layout fix-layout column>
                     <v-flex d-inline-flex>
                        <v-card>
                           <v-data-table :headers="table_headers" :items="containers" :pagination.sync="pagination" hide-actions class="elevation-1">
                              <template slot="headers" slot-scope="props">
                                 <tr>
                                    <th v-for="header in props.headers" :key="header.text" class="text-xs-center">
                                       {{ header.text }}
                                    </th>
                                 </tr>
                              </template>
                              <template slot="items" slot-scope="props">
                                 <tr :class="props.item.selected ? 'row-selected' : ''">
                                    <td @click="table_click(props.item)">{{ props.item.name }}</td>
                                    <td @click="table_click(props.item)">{{ props.item.level }} %</td>
                                    <td @click="table_click(props.item)">{{ props.item.status }}</td>
                                    <td @click="table_click(props.item)">{{ props.item.battery }} %</td>
                                    <td class="button-sm">
                                       <v-btn icon class="ml-0 mr-2" @click="showbindetails(props.item)">
                                          <v-icon color="grey" small>fa-eye</v-icon>
                                       </v-btn>
                                    </td>
                                 </tr>
                              </template>
                           </v-data-table>
                        </v-card>
                     </v-flex>
                     <v-flex d-block>
                        <v-card>
                           <div class="text-xs-center">
                              <span @click="change_page('-')">&larr;</span>
                              <span @click="change_page('+')">&rarr;</span>
                           </div>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md6>
                  <v-layout fix-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card>
                           <l-map :zoom="map.zoom" style="z-index: 5" :center="map.center">
                              <l-tile-layer :url="map.url" :attribution="map.attribution"></l-tile-layer>
                              <template v-for="container in containers">
                                 <l-marker :lat-lng="container.coordinates" @click="map_marker_click" v-bind:key="container.name"></l-marker>
                              </template>
                           </l-map>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
            </v-layout>
         </v-flex>
         <v-flex d-flex md5>
            <v-layout fix-layout row wrap>
               <v-flex d-flex md5>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="cyan lighten-2" dark>
                           <v-card-title primary class="title">Daily filling level
                           </v-card-title>
                           <v-card-text class="pt-0">
                              <svg class="chart" id="daily_filling_levels_chart"></svg>
                           </v-card-text>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md2>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="indigo lighten-2" dark>
                           <v-card-title primary class="title">Filling level
                           </v-card-title>
                           <v-card-text class="">
                              <svg class="chart" id="waste_filling_levels_chart"></svg>
                           </v-card-text>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md2>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="blue lighten-3" dark>
                           <v-card-title primary class="title">Online
                           </v-card-title>
                           <v-card-text class="pt-0">
                              <span class="display-3 mx-auto">{{ online }}/{{ containers.length }}</span>
                              <span class="display-1"> containers online</span>
                           </v-card-text>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md3>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="teal lighten-2" dark>
                           <v-card-text class="pt-0">
                              <v-card-title primary class="title">Batteries
                              </v-card-title>
                              <svg class="chart" id="batteries_levels_chart"></svg>
                           </v-card-text>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
            </v-layout>
         </v-flex>
      </v-layout>
      <bindetails ref="bindetails"></bindetails>

   </v-container>
</template>

<script>
import Vue from "vue";
import Axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, Axios);

import bindetails from "../components/bindetails.vue";
Vue.component("bindetails", bindetails);

import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

import * as d3 from "d3";
import charts from "../v-charts";
Vue.use(charts);
Object.defineProperty(Vue.prototype, "$d3", { value: d3 });

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data: () => ({
    waste_filling_levels_chart: {
      dim: "name",
      height: "150",
      width: "150",
      selector: "#waste_filling_levels_chart",
      metric: "value",
      data: {}
    },
    daily_filling_levels_chart: {
      dim: "name",
      height: "150",
      width: "150",
      selector: "#daily_filling_levels_chart",
      metric: "value",
      data: {}
    },
    batteries_levels_chart: {
      dim: "name",
      height: "150",
      width: "150",
      selector: "#batteries_levels_chart",
      metric: "value",
      data: {}
    },
    map: {
      zoom: 12,
      center: L.latLng(55.697247, 37.357755),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    },
    pagination: { rowsPerPage: 5 },
    selected: [],
    online: 0,
    table_headers: [
      { text: "Name", value: "name" },
      { text: "Level", value: "level" },
      { text: "Status", value: "status" },
      { text: "Battery", value: "battery" },
      { text: "Details", value: "details" }
    ],
    containers: [
      {
        coordinates: L.latLng(55.696623, 37.356674),
        name: "Waste container #23",
        type: "waste",
        level: "20",
        battery: "93",
        status: "online"
      },
      {
        coordinates: L.latLng(55.696342, 37.359745),
        name: "Waste container #65",
        type: "waste",
        level: "40",
        battery: "93",
        status: "online"
      },
      {
        coordinates: L.latLng(55.699384, 37.366796),
        name: "Waste container #82",
        type: "waste",
        level: "80",
        battery: "98",
        status: "online"
      },
      {
        coordinates: L.latLng(55.70835, 37.374306),
        name: "Waste container #12",
        type: "waste",
        level: "90",
        battery: "95",
        status: "online"
      },
      {
        coordinates: L.latLng(55.683824, 37.335218),
        name: "Waste container #45",
        type: "waste",
        level: "2",
        battery: "99",
        status: "online"
      },
      {
        coordinates: L.latLng(55.680333, 37.345947),
        name: "Waste container #88",
        type: "waste",
        level: "10",
        battery: "94",
        status: "online"
      },
      {
        coordinates: L.latLng(55.694659, 37.3438),
        name: "Waste container #92",
        type: "waste",
        level: "28",
        battery: "98",
        status: "online"
      },
      {
        coordinates: L.latLng(55.685413, 37.353031),
        name: "Waste container #10",
        type: "waste",
        level: "19",
        battery: "95",
        status: "offline"
      },
      {
        coordinates: L.latLng(55.679254, 37.34153),
        name: "Waste container #16",
        type: "waste",
        level: "30",
        battery: "10",
        status: "online"
      }
    ]
  }),

  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  },
  mounted: function() {
    this.waste_filling_levels_chart.data = this.calc_filling_levels();
    this.batteries_levels_chart.data = this.calc_battery_levels();
    this.daily_filling_levels_chart.data = this.calc_battery_levels();
    this.online = this.calc_online();
    this.renderCharts();
  },
  methods: {
    showbindetails(item) {
      this.$refs.bindetails.show(item);
    },
    renderCharts: function() {
      this.$helpers.chart.pieChart(
        this.$d3,
        this.waste_filling_levels_chart.data,
        this.waste_filling_levels_chart
      );
      this.$helpers.chart.pieChart(
        this.$d3,
        this.batteries_levels_chart.data,
        this.batteries_levels_chart
      );
      this.$helpers.chart.pieChart(
        this.$d3,
        this.daily_filling_levels_chart.data,
        this.daily_filling_levels_chart
      );
    },
    map_marker_click(event) {
      let container;
      for (let index = 0; index < this.containers.length; index++) {
        this.containers[index].selected = false;
        if (
          event.latlng.lat == this.containers[index].coordinates.lat &&
          event.latlng.lng == this.containers[index].coordinates.lng
        ) {
          this.containers[index].selected = true;
          container = this.containers[index];
          this.map.center = L.latLng(0, 0);
          this.map.center = this.containers[index].coordinates;
        }
      }
    },

    table_click(item) {
      console.log(item);
      this.containers.forEach(container => {
        container.selected = false;
      });
      item.selected = true;
      this.map.center = item.coordinates;
      this.map.zoom = 15;
    },
    calc_filling_levels() {
      let count_20 = 0;
      let count_80 = 0;
      let count_100 = 0;
      for (let index = 0; index < this.containers.length; index++) {
        if (this.containers[index].level < 20) count_20++;
        else if (this.containers[index].level <= 80) count_80++;
        else if (this.containers[index].level > 80) count_100++;
      }
      return [
        { name: "<20%", value: count_20 },
        { name: "<80%", value: count_80 },
        { name: ">80%", value: count_100 }
      ];
    },
    calc_online() {
      let online = 0;
      for (let index = 0; index < this.containers.length; index++) {
        if (this.containers[index].status == "online") online++;
      }
      console.log(online);
      return online;
    },
    calc_battery_levels() {
      let count_20 = 0;
      let count_80 = 0;
      let count_100 = 0;
      for (let index = 0; index < this.containers.length; index++) {
        if (this.containers[index].battery < 20) count_20++;
        else if (this.containers[index].battery <= 80) count_80++;
        else if (this.containers[index].battery > 80) count_100++;
      }
      return [
        { name: "<20%", value: count_20 },
        { name: "<80%", value: count_80 },
        { name: ">80%", value: count_100 }
      ];
    },
    change_page(direction) {
      if (direction == "-" && this.pagination.page > 1) {
        this.pagination.page--;
      }
      if (direction == "+" && this.pagination.page < this.pages) {
        this.pagination.page++;
      }
    }
  }
};
</script>

<style scoped>
.row-selected {
  background-color: rgb(155, 204, 255);
}

table.table thead tr {
  height: 30px;
}

.small_title {
  height: 30px;
}

.button-sm {
  margin: -11px !important;
}

.button-sm button {
   height: 16px;
   width: 16px;
   margin: 0;
}
</style>

<style>
@import "../../node_modules/leaflet/dist/leaflet.css";

.container.fill-height .layout.fix-layout {
  height: calc(100% + 8px);
}

.container.fill-height .layout.fix-layout-large {
  height: calc(100% + 16px);
}

.move-top {
  margin-top: -8px;
}

table.table tbody td,
table.table tbody th {
  height: 25px !important;
}
</style>
