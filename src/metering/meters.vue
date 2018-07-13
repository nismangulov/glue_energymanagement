<template>
   <v-container grid-list-md fill-height fluid>

      <v-layout column fix-layout>
         <v-flex d-flex md8>
            <v-layout fix-layout row wrap>
               <v-flex d-flex md4>
                  <v-layout column fix-layout>
                     <v-flex d-flex md6>
                         <v-card flat>
                            <iframe src="/grafana/d-solo/Rfv-XEHmk/scpower?panelId=10" class="iframe-size" scrolling="no" frameborder="0"></iframe>
                         </v-card>
                     </v-flex>
                     <v-flex d-flex md6>
                         <v-card flat>
                            <iframe src="/grafana/d-solo/Rfv-XEHmk/scpower?panelId=6" class="iframe-size" scrolling="no" frameborder="0"></iframe>
                         </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md8>
                   <v-card flat>
                      <iframe src="/grafana/d-solo/Rfv-XEHmk/scpower?panelId=12" class="iframe-size" scrolling="no" frameborder="0"></iframe>
                   </v-card>
               </v-flex>
            </v-layout>
         </v-flex>
         <v-flex d-flex md4>
            <v-layout fix-layout column>
               <v-flex d-flex md6>
                  <v-layout fix-layout row wrap>
                     <v-flex d-flex md4>
                        <v-layout row wrap>
                           <v-flex d-flex md4>
                              <v-card flat>
                                 <iframe src="/grafana/d-solo/Rfv-XEHmk/scpower?panelId=14" class="iframe-size" scrolling="no" frameborder="0"></iframe>
                              </v-card>
                           </v-flex>
                           <v-flex d-flex md4>
                              <v-card flat>
                                 <iframe src="/grafana/d-solo/Rfv-XEHmk/scpower?panelId=15" class="iframe-size" scrolling="no" frameborder="0"></iframe>
                              </v-card>
                           </v-flex>
                           <v-flex d-flex md4>
                              <v-card flat>
                                 <iframe src="/grafana/d-solo/Rfv-XEHmk/scpower?panelId=16" class="iframe-size" scrolling="no" frameborder="0"></iframe>
                              </v-card>
                           </v-flex>
                        </v-layout>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md6>
                  <v-layout fix-layout row wrap>
                     <v-flex d-flex md4>
                        <v-layout row wrap>
                           <v-flex d-flex md4>
                              <v-card flat>
                                 <iframe src="/grafana/d-solo/Rfv-XEHmk/scpower?panelId=17" class="iframe-size" scrolling="no" frameborder="0"></iframe>
                              </v-card>
                           </v-flex>
                           <v-flex d-flex md4>
                              <v-card flat>
                                 <iframe src="/grafana/d-solo/Rfv-XEHmk/scpower?panelId=20" class="iframe-size" scrolling="no" frameborder="0"></iframe>
                              </v-card>
                           </v-flex>
                           <v-flex d-flex md4>
                              <v-card flat>
                                 <iframe src="/grafana/d-solo/Rfv-XEHmk/scpower?panelId=21" class="iframe-size" scrolling="no" frameborder="0"></iframe>
                              </v-card>
                           </v-flex>
                        </v-layout>
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

export default {
  data: () => ({
  })
};
</script>

<style>
.iframe-size {
  height: 100%;
  width: 100%;
  border: none;
  overflow:hidden;
}
</style>
