<template>
<v-container grid-list-md fill-height>

   <v-layout column>
      <v-flex d-flex md4>
            <v-layout class="fix-layout" row wrap>
               <v-flex d-flex md3>
                  <v-card :color="waste.color" dark>
                     <v-card-title primary class="title">Waste
                        <v-spacer></v-spacer>
                        <v-icon>fa-trash</v-icon>
                     </v-card-title>
                     <v-card-text>
                        <span class="title">Containers full: </span> <span class="headline">{{ waste.value }}%</span>
                     </v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md3 >
                  <v-card color="pink" dark >
                     <v-card-title primary class="title">Parkings <v-spacer></v-spacer>  <v-icon right>{{ lorem.parking.icon }}</v-icon></v-card-title>
                     <v-card-text >
                            {{ lorem.parking.title1.slice(0, 90) }}<h2  style="display:inline">{{ lorem.parking.value1 }}</h2> <br>
                            {{ lorem.parking.title2.slice(0, 90) }}<h2  style="display:inline">{{ lorem.parking.value2 }}</h2>
                     </v-card-text>

                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card color="purple" dark>
                     <v-card-title primary class="title">Smart lighting <v-spacer></v-spacer>  <v-icon right>{{ lorem.sl.icon }}</v-icon></v-card-title>
                     <v-card-text>{{ lorem.sl.title1.slice(0, 100) }}<h2  style="display:inline">  {{ lorem.sl.value1}}</h2></v-card-text>
                  </v-card>
               </v-flex>
               <v-flex d-flex md3>
                  <v-card color="indigo" dark>
                     <v-card-title primary class="title">Video<v-spacer></v-spacer>  <v-icon right>{{ lorem.video.icon }}</v-icon></v-card-title>
                     <v-card-text>{{ lorem.video.title.slice(0, 100) }}</v-card-text>
                  </v-card>
               </v-flex>
            </v-layout>
      </v-flex>
      <v-flex d-flex md8>
            <v-layout row wrap>
         <v-flex d-flex md6>
                  <v-layout row wrap>
                     <v-flex d-flex md12>
                        <v-card color="blue" dark>
                           <v-card-title primary class="title">Map</v-card-title>
                        </v-card>
                     </v-flex>
                  </v-layout>
               </v-flex>
               <v-flex d-flex md6>
                  <v-layout column>
                     <v-flex d-flex md6>
                        <v-layout row wrap>
                           <v-flex class="fix-layout" d-flex md12>
                              <v-layout class="fix-layout" row wrap>
                                 <v-flex d-flex md6>
                                    <v-card color="green" dark>
                                       <v-card-title primary class="title">Meters<v-spacer></v-spacer>  <v-icon right>{{ lorem.meters.icon }}</v-icon></v-card-title>
                                       <v-card-text>{{ lorem.meters.title1.slice(0, 100) }}<h2  style="display:inline">{{ lorem.meters.value1 }}</h2> </v-card-text>
                                    </v-card>
                                 </v-flex>
                                 <v-flex d-flex md6>
                                    <v-layout class="fix-layout" row wrap>
                                 <v-flex d-flex md6>
                                    <v-card color="orange" dark >
                                       <v-card-title primary class="title">AirMeters  <v-icon right>{{ lorem.air.icon }}</v-icon></v-card-title>
                                       <v-card-text >{{ lorem.air.title.slice(0, 50) }}<h2 style="display:inline" >  {{ lorem.air.grade}}</h2></v-card-text>
                                    </v-card>
                                       </v-flex>
                                       <v-flex d-flex md6>
                                    <v-card color="lime" dark>
                                       <v-card-title primary class="title">Weather <v-icon right>{{ lorem.weather.icon }}</v-icon></v-card-title>
                                       <v-card-text>{{ lorem.weather.title.slice(0, 50) }}<h2 >  {{ lorem.weather.temperature}}</h2></v-card-text>
                                    </v-card>
                                 </v-flex>
                                    </v-layout>
                                 </v-flex>
                              </v-layout>
                              </v-flex>
                        </v-layout>
                     </v-flex>
                     <v-flex class="move-top" d-flex md6>
                        <v-layout class="fix-layout-large" row wrap>
                              <v-flex d-flex md12>
                                    <v-card color="teal" dark>
                                       <v-card-title primary class="title">Power<v-spacer></v-spacer>  <v-icon right>{{ lorem.power.icon }}</v-icon></v-card-title>
                                              <v-card-text>{{ lorem.power.title1.slice(0, 100) }}<h2 style="display:inline">{{ lorem.power.value1 }}</h2><br>
                                              {{ lorem.power.title2.slice(0, 90) }}<h2  style="display:inline">{{ lorem.power.value2 }}</h2>
                                       </v-card-text>
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
    waste: {
      value: "24",
      color: "green lighten-1"
    },
    lorem: {
      parking: {
        title1: "Free: ",
        value1: "60%",
        title2: "Parked cars/hour: ",
        value2: "230",
        title3: " Average park time:",
        value3: 10,
        title4: "revenue today: ",
        value4: " 12.5 тыс.р/час",
        icon: "fa-car fa-5x"
      },
      sl: {
        title1: "Lamps power-on: ",
        value1: "40/400",
        title2: "incidents",
        value2: 15,
        title3: "Current  consumption: ",
        value3: " 500Wh ",
        icon: "fa-lightbulb"
      },
      video: { title: "Selected camera stream", icon: "fa-video" },
      map: { title: "Карта" },
      meters: {
        title1: "Households equiped: ",
        value1: "20%",
        title2: "Current consumption:",
        value2: "500Wh:",
        title3: "Incidents:",
        value3: 0,
        icon: "fa-tachometer-alt"
      },
      air: { title: "Air quality grade: ", grade: "1", icon: "fa-tree" },
      weather: {
        title: "Forecast",
        weathericon: "fa-cloud",
        temperature: "+23C",
        icon: "fa-cloud"
      },
      power: {
        title1: "Corent consumption: ",
        value1: "90Wh",
        title2: "incidents: ",
        value2: 0,
        icon: "fa-chart-line"
      }
    }
  })
};
</script>

<style>
   .container.fill-height .layout.fix-layout {
      height: calc(100% + 8px)
   }

   .container.fill-height .layout.fix-layout-large {
      height: calc(100% + 16px)
   }

   .move-top {
      margin-top: -8px;
   }
</style>
