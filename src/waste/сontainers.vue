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
                                 <tr @click="center_map(props.item.coordinates)" :class="props.item.selected ? 'row-selected' : ''">
                                    <td>{{ props.item.name }}</td>
                                    <td>{{ props.item.level }}</td>
                                    <td>{{ props.item.battery }}</td>
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
                           <l-map :zoom="map.zoom" :center="map.center">
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
                              <column-chart width="90%" height="100%" class="mx-auto mt-2" :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
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
                           <v-card-text class="pt-0">
                              <pie-chart :data="waste.data" width="60%" height="100%" :colors="waste.colors" :bcolors="waste.bcolors" :library="waste.library" class="mx-auto mt-2"></pie-chart>
                           </v-card-text>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md2>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="blue lighten-3" dark>
                           <v-card-title primary class="title">Number of containers
                           </v-card-title>
                           <v-card-text class="pt-0">
                              <pie-chart :donut="true" :data="waste.data" width="60%" height="100%" :colors="waste.colors" :bcolors="waste.bcolors" :library="waste.library" class="mx-auto mt-2"></pie-chart>
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
                              <v-card-title primary class="title">battery containers
                              </v-card-title>
                              <pie-chart :donut="true" :data="waste.data" width="60%" height="100%" :colors="waste.colors" :bcolors="waste.bcolors" :library="waste.library" class="mx-auto mt-2"></pie-chart>
                           </v-card-text>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
            </v-layout>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
import Vue from "vue";
import Axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, Axios);

import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

import VueChartkick from "vue-chartkick";
import Chart from "chart.js";
Vue.use(VueChartkick, { adapter: Chart });

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data: () => ({
    map: {
      zoom: 12,
      center: L.latLng(55.697247, 37.357755),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    },
    pagination: { rowsPerPage: 15, page: 1 },
    selected: [],

    table_headers: [
      { text: "Name", value: "name" },
      { text: "Level", value: "level" },
      { text: "Battery", value: "battery" }
    ],
    containers: [
      {
        coordinates: L.latLng(55.696623, 37.356674),
        name: "Waste container #23",
        type: "waste",
        level: "20%",
        battery: "93%"
      },
      {
        coordinates: L.latLng(55.696342, 37.359745),
        name: "Waste container #65",
        type: "waste",
        level: "40%",
        battery: "93%"
      },
      {
        coordinates: L.latLng(55.699384, 37.366796),
        name: "Waste container #82",
        type: "waste",
        level: "80%",
        battery: "98%"
      },
      {
        coordinates: L.latLng(55.70835, 37.374306),
        name: "Waste container #12",
        type: "waste",
        level: "90%",
        battery: "95%"
      },
      {
        coordinates: L.latLng(55.683824, 37.335218),
        name: "Waste container #45",
        type: "waste",
        level: "2%",
        battery: "99%"
      },
      {
        coordinates: L.latLng(55.680333, 37.345947),
        name: "Waste container #88",
        type: "waste",
        level: "10%",
        battery: "94%"
      },
      {
        coordinates: L.latLng(55.694659, 37.3438),
        name: "Waste container #92",
        type: "waste",
        level: "28%",
        battery: "98%"
      },
      {
        coordinates: L.latLng(55.685413, 37.353031),
        name: "Waste container #10",
        type: "waste",
        level: "19%",
        battery: "95%"
      },
      {
        coordinates: L.latLng(55.679254, 37.34153),
        name: "Waste container #16",
        type: "waste",
        level: "30%",
        battery: "20%"
      }
    ],
    waste: {
      color: "green lighten-1",
      data: { "<20%": 20, "<80%": 60, ">80%": 20 },
      colors: ["#039BE5", "#8D6E63", "#D4E157"],
      bcolors: ["#FF0000", "#0000FF", "#00FFFF"],
      library: { legend: { display: true } }
    }
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
  methods: {
    map_marker_click(event) {
      for (let index = 0; index < this.containers.length; index++) {
        this.containers[index].selected = false;
        if (
          event.latlng.lat == this.containers[index].coordinates.lat &&
          event.latlng.lng == this.containers[index].coordinates.lng
        ) {
          this.containers[index].selected = true;
          this.map.center = this.containers[index].coordinates;
        }
      }
    },
    center_map(coordinates) {
      this.map.center = coordinates;
      this.map.zoom = 15;
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

table.table tbody td,
table.table tbody th {
  height: 25px !important;
}

table.table thead tr {
  height: 30px;
}

.small_title {
  height: 30px;
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
</style>
