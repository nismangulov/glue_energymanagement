import Vue from 'vue'
import main_page from './main_page.vue'
import dashboard from './dashboard.vue'

import eco_monitoring_map from './eco_monitoring/map.vue'
import eco_monitoring_stations from './eco_monitoring/stations.vue'
import eco_monitoring_history from './eco_monitoring/history.vue'
import eco_monitoring_aqi from './eco_monitoring/aqi.vue'
import eco_monitoring_sityair from './eco_monitoring/sityair.vue'

import parking_map from './parking/map.vue'
import parking_stat from './parking/stat.vue'

import lighting_main from './lighting/main.vue'
import lighting_unilight from './lighting/unilight.vue'

import safety_acs_lora from './safety/acs-lora.vue'
import safety_video_monitoring from './safety/video-monitoring.vue'
import safety_video_analitics from './safety/video-analitics.vue'

import metering_gascloud from './metering/gascloud.vue'
import metering_linergo from './metering/linergo.vue'
import metering_meters from './metering/meters.vue'

import infras_incidents from './infrastructure/incidents_new.vue'
import infras_stat from './infrastructure/energy_management.vue'
import infras_monitoring from './infrastructure/monitoring.vue'
import infras_managment from './infrastructure/managment.vue'
import infras_gateways from './infrastructure/gateways.vue'

import waste_сontainers from './waste/сontainers.vue'
import waste_planning from './waste/planning.vue'
import waste_managment from './waste/managment.vue'
import waste_stat from './waste/stat.vue'

let color_nokia = {
   blue: "#124191",
   gray_1: "#EDF3F5",
   gray_2: "#BEC8D2",
   gray_3: "#98A2AE",
   gray_4: "#4D5766",
   gray_5: "#273142",
   light_blue: "#00C9FF",
   red: "#FF3154",
   yellow: "#FFFB00",
   green: "#4BDD33",
   orange: "#FF9910",
   grafana_grey: "#F6F7F9"
}

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify, {
   theme: {
      nokia_blue: color_nokia.blue,
      nokia_gray_1: color_nokia.gray_1,
      nokia_gray_2: color_nokia.gray_2,
      nokia_gray_3: color_nokia.gray_3,
      nokia_gray_4: color_nokia.gray_4,
      nokia_gray_5: color_nokia.gray_5,
      nokia_light_blue: color_nokia.light_blue,
      nokia_red: color_nokia.red,
      nokia_yellow: color_nokia.yellow,
      nokia_green: color_nokia.green,
      nokia_orange: color_nokia.orange,

      primary: color_nokia.blue,
      secondary: color_nokia.light_blue,
      accent: color_nokia.yellow,
      error: color_nokia.red,
      warning: color_nokia.yellow,
      info: color_nokia.gray_2,
      success: color_nokia.green,
      grafana_grey: color_nokia.grafana_grey,
   }
})

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(solid.faDatabase)
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const router = new VueRouter({
   routes: [{
      path: '/dashboard',
      component: dashboard
   }, {
      path: '/eco_monitoring/map',
      component: eco_monitoring_map
   }, {
      path: '/eco_monitoring/stations',
      component: eco_monitoring_stations
   }, {
      path: '/eco_monitoring/history',
      component: eco_monitoring_history
   }, {
      path: '/eco_monitoring/aqi',
      component: eco_monitoring_aqi
   },
   {
      path: '/eco_monitoring/sityair',
      component: eco_monitoring_sityair
   }, {
      path: '/parking/map',
      component: parking_map
   }, {
      path: '/parking/stat',
      component: parking_stat
   }, {
      path: '/lighting/main',
      component: lighting_main
   }, {
      path: '/lighting/unilight',
      component: lighting_unilight
   }, {
      path: '/safety/acs_lora',
      component: safety_acs_lora
   }, {
      path: '/safety/video-monitoring',
      component: safety_video_monitoring
   }, {
      path: '/safety/video-analitics',
      component: safety_video_analitics
   }, {
      path: '/metering/gascloud',
      component: metering_gascloud
   }, {
      path: '/metering/linergo',
      component: metering_linergo
   }, {
      path: '/metering/meters',
      component: metering_meters
   }, {
      path: '/infrastructure/incidents',
      component: infras_incidents
   }, {
      path: '/lighting/energy_management',
      component: infras_stat
   }, {
      path: '/infrastructure/monitoring',
      component: infras_monitoring
   }, {
      path: '/infrastructure/gateways',
      component: infras_gateways
   }, {
      path: '/infrastructure/managment',
      component: infras_managment
   }, {
      path: '/waste/containers',
      component: waste_сontainers
   }, {
      path: '/waste/planning',
      component: waste_planning
   }, {
      path: '/waste/stat',
      component: waste_stat
   }, {
      path: '/waste/managment',
      component: waste_managment
   }, {
      path: '*',
      redirect: '/dashboard'
   }]
})

import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
   iconRetinaUrl: require('../node_modules/leaflet/dist/images/marker-icon-2x.png'),
   iconUrl: require('../node_modules/leaflet/dist/images/marker-icon.png'),
   shadowUrl: require('../node_modules/leaflet/dist/images/marker-shadow.png')
})

new Vue({
   el: '#app',
   router,
   render: h => h(main_page)
})
