<template>
   <v-container>
      <v-layout row wrap>
         <div class="title text-xs-center">{{ $route.path, $route.name }}</div>

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
  }),

};
</script>


<style>

</style>


<style scoped>

</style>
