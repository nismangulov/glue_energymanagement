<template>
   <v-container fill-height>
      <l-map :zoom="map.zoom" :center="map.center">
         <l-tile-layer :url="map.url" :attribution="map.attribution"></l-tile-layer>
         <l-marker :lat-lng="map.marker"></l-marker>
      </l-map>
   </v-container>
</template>


<script>
import Vue from "vue";
import Axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, Axios);
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";


export default {
     components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data: () => ({
    map: {
      zoom: 13,
      center: L.latLng(55.755826, 37.6172999),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(55.755826, 37.6172999)
    },
  }),
};
</script>


<style>

.fill-height {
  height: 100%;
  padding: 0px;
  padding-top: 2px;
}

.iframe-size {
  height: 100%;
  width: 100%;
  border: none;
}

</style>


<style scoped>

</style>
