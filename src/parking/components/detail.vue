<template>
   <div>
      <v-dialog v-model="visible" max-width="300px" overlay-hide style="z-index: 1">
         <v-card>
            <v-card-title>
               <div class="title text-xs-center">{{values.name}}</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
               <div class="subheading">Free: {{values.free}}/{{values.places}}</div>
               <v-progress-linear :value="this.get_progress(values)" height="20" color="secondary"></v-progress-linear>
            </v-card-text>
            <v-divider></v-divider>
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
    },
    get_progress(values) {
      return (values.free / values.places) * 100
    }
  }
};
</script>
