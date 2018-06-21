<template>
   <v-container grid-list-md fill-height>
      <v-layout fix-layout row wrap>
         <v-flex d-flex md12>
            <l-map :zoom="map.zoom" :center="map.center">
               <l-tile-layer :url="map.url"></l-tile-layer>
               <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color"></l-polyline>

               <template v-for="container in containers">
                  <l-marker :lat-lng="container.coordinates" v-bind:key="container.name" :icon="container.icon"></l-marker>
               </template>
            </l-map>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
import Vue from "vue";

import { LMap, LTileLayer, LMarker, LPolyline } from "vue2-leaflet";
import Glyph from "leaflet.icon.glyph";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline
  },
  data: () => ({
    map: {
      zoom: 14,
      center: L.latLng(55.697247, 37.357755),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    },
    polyline: {
      latlngs: [
        [55.70835, 37.374306],
        [55.699384, 37.366796],
        [55.696342, 37.359745],
        [55.696623, 37.356674],
        [55.694659, 37.3438],
        [55.680333, 37.345947],
        [55.683824, 37.335218],
        [55.679254, 37.34153]
      ],
      color: "green"
    },
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
        status: "offline",
        icon: L.icon.glyph({
          glyph: "0%"
        })
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

  computed: {},
  mounted: function() {},
  methods: {}
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

.button-sm {
  margin: -11px !important;
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
