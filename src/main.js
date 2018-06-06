import Vue from 'vue'
import main_page from './main_page.vue'
import dashboard from './dashboard.vue'

import eco_monitoring_map from './eco_monitoring/map.vue'
import eco_monitoring_stations from './eco_monitoring/stations.vue'
import eco_monitoring_history from './eco_monitoring/history.vue'

import parking_map from './parking/map.vue'
import parking_stat from './parking/stat.vue'

import lighting_main from './lighting/main.vue'
import lighting_unilight from './lighting/unilight.vue'

import safety_acs_lora from './safety/acs-lora.vue'
import safety_video from './safety/video.vue'

import metering_gascloud from './metering/gascloud.vue'
import metering_linergo from './metering/linergo.vue'
import metering_meters from './metering/meters.vue'

import energy_incidents from './energy/incidents.vue'
import energy_stat from './energy/stat.vue'

import waste_сontainers from './waste/сontainers.vue'
import waste_planning from './waste/planning.vue'
import waste_stat from './waste/stat.vue'


import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify, {
    theme: {
        primary: "#124191",
        secondary: "#1976D2",
        accent: "#80D8FF",
        error: "#B71C1C",
        warning: "#FBC02D",
        info: "#2196f3",
        success: "#4caf50"
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
        path: '/safety/video',
        component: safety_video
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
        path: '/energy/incidents',
        component: energy_incidents
    }, {
        path: '/energy/stat',
        component: energy_stat
    }, {
        path: '/waste/сontainers',
        component: waste_сontainers
    }, {
        path: '/waste/planning',
        component: waste_planning
    }, {
        path: '/waste/stat',
        component: waste_stat
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