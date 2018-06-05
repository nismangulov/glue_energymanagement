import Vue from 'vue'
import main_page from './main_page.vue'
import dashboard from './dashboard.vue'

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
        path: '*',
        redirect: '/dashboard'
    }]
})



new Vue({
    el: '#app',
    router,
    render: h => h(main_page)
})