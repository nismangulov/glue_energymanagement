<template>
   <v-container grid-list-md fill-height>
      <v-layout column fix-layout>
         <v-flex d-flex md3>
            <v-layout fix-layout row wrap>
               <v-flex d-flex md12>
                  <v-card color="green">
                  </v-card>
               </v-flex>
            </v-layout>
         </v-flex>
         <v-flex d-flex md5>
            <v-layout fix-layout row wrap>
               <v-flex d-flex md7>
                  <v-card color="green">
                  </v-card>
               </v-flex>
               <v-flex d-flex md5>
                  <v-card color="green">
                  </v-card>
               </v-flex>
            </v-layout>
         </v-flex>
         <v-flex d-flex md4>
            <v-layout fix-layout row wrap>
               <v-flex d-flex md3>
                  <v-card color="green">
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card color="green">
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card color="green">
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card color="green">
                  </v-card>
               </v-flex>
            </v-layout>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

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
