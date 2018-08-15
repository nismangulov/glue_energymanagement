import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

import main_page from './main_page.vue'
import dashboard from './dashboard.vue'
import power_quality from './power_quality/index.vue'
import phase_current_balance from './phase_current_balance/index.vue'
import scheduled_maintenance from './scheduled_maintenance/index.vue'
import electrical_shields from './electrical_shields/index.vue'
import problems from './problems/index.vue'
import energy_consumption from './energy_consumption/index.vue'

fontawesome.library.add(solid.faDatabase)

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

Vue.use(VueRouter)

const router = new VueRouter({
   routes: [{
      path: '/dashboard',
      component: dashboard
   }, {
      path: '/power_quality',
      component: power_quality
   }, {
      path: '/phase_current_balance',
      component: phase_current_balance
   }, {
      path: '/scheduled_maintenance',
      component: scheduled_maintenance
   }, {
      path: '/electrical_shields',
      component: electrical_shields
   }, {
      path: '/problems',
      component: problems
   }, {
      path: '/energy_consumption',
      component: energy_consumption
   }, {
      path: '*',
      redirect: '/dashboard'
   }]
})

new Vue({
   el: '#app',
   router,
   render: h => h(main_page)
})
