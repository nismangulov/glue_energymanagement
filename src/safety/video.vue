<template>
   <v-container grid-list-md fill-height>
      <v-layout column>
         <v-flex d-flex md6>
            <v-layout row wrap fill-height fix-layout>
               <v-flex d-flex md6 fix-layout>
                  <v-card color="green" dark>
                  </v-card>
               </v-flex>
               <v-flex d-flex md6>
                  <v-card color="green" dark>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-flex>
         <v-flex d-flex md6>
            <v-layout row wrap fill-height fix-layout>
               <v-flex d-flex md6 fix-layout>
                  <v-card color="green" dark>
                  </v-card>
               </v-flex>
               <v-flex d-flex md6>
                  <v-card color="green" dark>
                  </v-card>
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

export default {
  data: () => ({})
};
</script>


<style>
.fill-height {
  height: 100%;
}

.container.fill-height .layout.fix-layout {
  height: calc(100% + 8px);
}
</style>


<style scoped>
</style>
