<template>
   <div>
      <v-dialog v-model="visible" max-width="300px" overlay-hide style="z-index: 1">
         <v-card>
            <v-card-title>
               <div class="title text-xs-center">Energy consumption exceeded</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
               <div class="subheading">Consumption: 112%</div>
               <v-progress-linear height="100" color="red"></v-progress-linear>
            </v-card-text>
            <v-divider></v-divider>
            <!-- <v-card-text>
               <div class="subheading">Battery level: %</div>
               <v-progress-linear height="20" color="secondary"></v-progress-linear>
            </v-card-text>
            <v-divider></v-divider> -->
            <v-card-text>
               <div class="subheading ">Location: 55.781444, 37.542115</div>
            </v-card-text>
            <v-card-actions>
               <v-btn color="primary " flat @click.stop="visible=false">Close</v-btn>
            </v-card-actions>
         </v-card>
      </v-dialog>
   </div>
</template>

<script>
import Vue from "vue";

export default {
  data: () => ({
    visible: false,
    values: {}
  }),
  methods: {
    show(item) {
      this.values = item;
      this.visible = true;
    }
  }
};
</script>
