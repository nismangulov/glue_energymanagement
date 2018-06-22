<template>
  <div>
    <v-dialog v-model="visible" max-width="300px" overlay-hide style="z-index: 1 ">
      <v-card>
        <v-card-title>
          <div class="title text-xs-center ">{{props.name}} : {{props.status}} </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="subheading ">Utilization level:</div>
          {{props.level}}
          <v-progress-circular v-model="props.level" size="80" width="40" color="secondary"></v-progress-circular>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <div class="subheading ">Battery status:</div>
          {{props.battery}} 
          <v-progress-linear v-model="props.battery" height="20" color="secondary"></v-progress-linear>
        </v-card-text>
        <v-divider></v-divider>
            <v-card-text>
          <div class="subheading ">Location:</div>
          Lat:{{props.coordinates.lat}} : Lng:{{props.coordinates.lng}}
        </v-card-text>    
        <v-card-actions>
          <v-btn color="primary " flat @click.stop="visible=false ">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data: () => ({
    visible: false,
    props: {
      battery: '',
      level: '',
      btype: '',
      coordinates: '',
      name: '',
      visible: false
    }
  }),
  methods: {
    show(item) {
      this.props.level = item.level
      this.props.name = item.name
      this.props.type = item.type
      this.props.battery = item.battery
      this.props.coordinates = item.coordinates
      this.visible = true
    }
  }
}
</script>
