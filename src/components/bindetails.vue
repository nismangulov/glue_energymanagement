<template>
  <div>
    <v-dialog v-model="visible" max-width="300px" overlay-hide style="z-index: 1 ">
      <v-card>
        <v-card-title>
          <div class="title text-xs-center ">{{props.name}} </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="subheading ">Utilization level:</div>
          {{props.level}}
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <div class="subheading ">Battery status:</div>
          {{props.battery}} 
        </v-card-text>
        <v-divider></v-divider>
            <v-card-text>
          <div class="subheading ">Location:</div>
          {{props.coordinates}} 
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
